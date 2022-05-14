export type Item = {
  id: string;
  text: string;
  isComplete: boolean;
};

export const todoListFilterStates = [
  "Show All",
  "Show Completed",
  "Show Uncompleted",
] as const;
export type TodoFilterState = typeof todoListFilterStates[number];
export const isTodoFilterState = (v: string): v is TodoFilterState => {
  return todoListFilterStates.some((state) => state === v);
};
