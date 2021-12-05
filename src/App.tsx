import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";

interface Props {
  brand: string;
}

const App = ({ brand }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <Navbar brand={brand} />

      {/* Content  */}
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">Task Form</div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
