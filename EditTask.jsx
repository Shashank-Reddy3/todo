import React, { useEffect, useState } from "react";

const EditTask = ({ task, taskList, setTaskList }) => {
  const [editTask, setEditTask] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [taskDescrip, setTaskDescrip] = useState("");

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescrip(task.taskDescrip);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: projectName,
      taskDescrip: taskDescrip,
      timeStamp: task.timeStamp,
      duration: task.duration,
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    window.location.reload();
    setEditTask(false);
  };
  return (
    <div>
      <button
        onClick={() => setEditTask(true)}
        className="btn btn-neutral  text-lg uppercase"
      >
        edit
      </button>
      {editTask ? (
        <>
          <div className="   mt-32 md:mt-0 flex  justify-center  items-center overflow-x-hidden overflow-y-auto z-auto fixed inset-0">
            <div className="w-11/12 md:w-9/12 bg-white modal-box ">
              <div className=" flex flex-row  justify-between   p-5 bg-white text-black ">
                <h3 className="text-2xl font-bold">Edit Task</h3>
                <button
                  onClick={() => setEditTask(false)}
                  className="btn btn-sm btn-circle  text-lg btn-neutral  "
                >
                  ✕
                </button>
              </div>
              <form className="p-6">
                <div className="mb-4">
                  <label
                    htmlFor="project-name "
                    className=" uppercase track-wide pr-28 lg:pr-64 md:pr-64   text-sm font-bold text-gray-600 mb-2"
                  >
                    project name
                  </label>
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                    name="project"
                    id="project-name"
                    type="text"
                    placeholder="enter the task"
                    className="input input-bordered w-full text-lg  text-white"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="description"
                    className="  uppercase track-wide pr-28 lg:pr-64 md:pr-64  text-sm font-bold text-gray-500 mb-2"
                  >
                    description
                  </label>
                  <textarea
                    value={taskDescrip}
                    onChange={(e) => setTaskDescrip(e.target.value)}
                    name="description"
                    id="description"
                    placeholder="description"
                    className="textarea text-black  text-md md:text-lg  font-semibold textarea-bordered textarea-md md:textarea-lg w-full bg-blue-100"
                  ></textarea>
                </div>
              </form>
              <div>
                <button
                  onClick={handleUpdate}
                  className=" text-lg btn bg-green-600 border-none text-white "
                >
                  Update task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default EditTask;
