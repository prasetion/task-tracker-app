import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "food shipping",
      day: "Feb 3rd 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "food delivery",
      day: "Feb 4rd 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("delete", id);
  };

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
      ) : (
        " No Tasks"
      )}
    </div>
  );
};

export default App;
