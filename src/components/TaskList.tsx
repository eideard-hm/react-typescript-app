import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task, i) => (
        <div className="col-md-4 p-2" key={i}>
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
};

export default TaskList;
