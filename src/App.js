import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

function App() {
  const [taskList, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
