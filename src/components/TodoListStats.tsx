import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todo";

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted);
    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items Uncompleted: {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}</li>
        </ul>
    )
};
