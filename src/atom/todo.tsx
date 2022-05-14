import { atom } from "recoil";
import { Item } from "../types/todo";

export const todoListState = atom({
  key: "TodoList",
  default: new Array<Item>(),
});
