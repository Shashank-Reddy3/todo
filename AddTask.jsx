import React, { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescrip, setTaskDescrip] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handleInput = (elem) => {
    const { name, value } = elem.target;
    if (name === "project") {
      setProjectName(value);
      setErrMsg("");
    }
    if (name === "project" && value === "") {
      setErrMsg("Enter project name to continue");
    }
    if (name === "description") {
      setTaskDescrip(value);
    }
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (!projectName || projectName === "    ") {
      setErrMsg("Enter project name to continue");
    } else {
      let timeStamp = new Date();
      let tempList = taskList;
      tempList.push({
        projectName,
        taskDescrip,
        timeStamp: timeStamp,
        duration: 0,
      });
      localStorage.setItem("taskList", JSON.stringify(tempList));
      window.location.reload();

      setAddModal(false);
      setProjectName("");
      setTaskDescrip("");
      setErrMsg("");
    }
  };
  return (
    <div>
      <button
        onClick={() => setAddModal(true)}
        className=" btn btn-accent ml-4 mr-4 text-xl"
      >
        +New
      </button>
      {addModal ? (
        <>
          <div className="   mt-32 md:mt-0 flex  justify-center  items-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0">
            <div className="w-11/12 md:w-9/12 bg-white modal-box ">
              <div className=" flex flex-row  justify-between   p-5 bg-white text-black ">
                <h3 className="text-2xl font-bold">Add the task</h3>
                <button
                  onClick={() => setAddModal(false)}
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
                    onChange={handleInput}
                    required
                    name="project"
                    id="project-name"
                    type="text"
                    placeholder="enter the task"
                    className="input input-bordered w-full text-lg  text-white"
                  />
                  <p className="text-red-800 pt-3 ">{errMsg}</p>
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
                    onChange={handleInput}
                    name="description"
                    id="description"
                    placeholder="description"
                    className="textarea text-black  text-md md:text-lg  font-semibold textarea-bordered textarea-md md:textarea-lg w-full bg-blue-100"
                  ></textarea>
                </div>
              </form>
              <div>
                <button
                  onClick={handleTask}
                  className=" text-lg btn bg-green-600 border-none text-white "
                >
                  Add task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddTask;
