import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task, i) => (
        <div className="col-md-4 p-2" key={i}>
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};

export default TaskList;
