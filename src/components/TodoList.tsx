import { useRecoilValue, useRecoilState } from "recoil";
import { todoListState, filteredTodoListState } from "../recoil/todo";
import { ChangeEventHandler } from "react";
import { Item } from "../types/todo";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export const TodoItem = ({ item }: { item: Item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);
  const editItemText: ChangeEventHandler = ({ target }) => {
    if (target instanceof HTMLInputElement) {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: target.value,
      });
      setTodoList(newList);
    }
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div className={"todoItem"}>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

function replaceItemAtIndex(arr: Array<Item>, index: number, newValue: Item) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Array<Item>, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
