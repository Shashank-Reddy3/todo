import React, { useState } from "react";
import EditTask from "./EditTask";
import StopWatch from "./StopWatch";
import { useDrag } from "react-dnd";

const Todo = ({ task, index, taskList, setTaskList }) => {
  // delete method
  const deleteTask = (itemID) => {
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
    // setTaskList((currTask) => currTask.filter((todo) => todo.id !== itemID));
  };

  return (
    <>
      <div className=" lg:w-4/12 md:w-8/12 w-11/12 z-50 my-2 mx-4 p-4 rounded-xl bg-black ">
        <div className="flex justify-between items-center mb-8   ">
          <p className="border-b-2 pb-1 border-green-200 text-2xl text-white   capitalize">
            {task.projectName}
          </p>
          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <p className="text-md w-11/12">{task.taskDescrip}</p>
        <StopWatch
          task={task}
          index={index}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={deleteTask}
            className="btn uppercase btn-secondary rounded-md text-md font-bold bg-red-600 outline-none border-none "
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
