import React, { useEffect, useState } from "react";

const StopWatch = ({ task, taskList, setTaskList }) => {
  const [time, setTime] = useState(task.duration);
  const [running, setRunning] = useState(false);
  console.log(time);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStop = () => {
    setRunning(false);
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: task.projectName,
      taskDescrip: task.taskDescrip,
      timeStamp: task.timeStamp,
      duration: time,
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center  ">
      <div className="text-xl mr-4 w-1/6 mt-4 py-2    text-white ">
        <span className="text-green-200">
          {("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
        </span>
        <span className="text-green-200">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="text-green-200">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="text-sm text-red-200">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="flex mt-2">
        <div className="mr-2">
          {running ? (
            <>
              <button
                onClick={handleStop}
                className="bg-gray-800 py-1 px-4 text-blue-200 rounded-lg"
              >
                Stop
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setRunning(true);
                }}
                className="bg-gray-800 py-1 px-4 text-blue-200 rounded-lg"
              >
                Start
              </button>
            </>
          )}
        </div>
        <button
          onClick={() => {
            setTime(0);
          }}
          className="bg-gray-800 py-1 px-4 text-white rounded-lg"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
