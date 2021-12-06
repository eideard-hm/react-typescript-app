import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props {
  addTask: (task: Task) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

const TaskForm = ({ addTask }: Props) => {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
        />

        <textarea
          name="description"
          id="description"
          placeholder="Writer a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary">
          Save <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
