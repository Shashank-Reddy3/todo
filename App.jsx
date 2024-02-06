import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  // console.log(taskList);
  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);

  return (
    <div>
      <h1 className="text-green-400 font-bold py-4 pl-6 text-2xl">
        task Tracker
      </h1>
      <p className="text-xl pl-8 pb-4">Hi there!</p>
      <p className="items-center text-center  flex text-xl pl-8">
        Click
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        to add a new task
      </p>
      <h1 className="modal-box text-2xl capitalize">Todo list:</h1>
      {taskList.map((task, index) => (
        <Todo
          key={index}
          task={task}
          // index={index}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </div>
  );
};

export default App;
