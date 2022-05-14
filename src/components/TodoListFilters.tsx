import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/todo";
import { isTodoFilterState } from "../types/todo.d";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({ target }: { target: HTMLSelectElement }) => {
    if (isTodoFilterState(target.value)) setFilter(target.value);
  };
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
