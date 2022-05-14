import { useSetRecoilState } from "recoil";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { todoListState } from "../atom/todo";

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };
  const onChange: ChangeEventHandler = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      setInputValue(e.target.value);
    }
  };
  return (
    <div className="todo-item-creator">
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>add</button>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return String(id++);
}
