import React from "react";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoListFilters } from "./components/TodoListFilters";
import { TodoListStats } from "./components/TodoListStats";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </div>
  );
}

export default App;
