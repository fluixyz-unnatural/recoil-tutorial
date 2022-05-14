import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./atom/todo";
import { TodoItem } from "./components/TodoItem";
import { TodoItemCreator } from "./components/TodoItemCreator";

function App() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;
