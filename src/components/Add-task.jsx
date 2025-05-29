import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTaskList([...taskList, task]); // Add new task to the list
    setTask(""); // Clear the input
  };
  //   const handTech = {
  //   earpod: "oraimo",
  //   battery: "universal"
  // }
  // const book = {
  //   pen: "bic",
  //   milk: "cremela",
  // }

  // const tech = {...handTech, ...book, pen: "leo"}
  const leaves = ["vegetable", "lettuce"];

  const fruits = ["apple", "banana", "orange", ...leaves];
  console.log(fruits); // 'apple', 'banana', 'orange', 'vegetable' and 'lettuce'

  const handleDeleteTask = (indexToDelete) => {
    const newTaskList = taskList.filter(
      (_task, index) => index !== indexToDelete
    );
    setTaskList(newTaskList);
  };
  const [checkedStates, setIsCheckedStates] = useState({});
  // const CheckedStates = {
  //   wisdom: true,
  //   victor: true
  // }
  const handleChange = (event) => {
    // console.log("i: ", i);
    setIsCheckedStates(() => {
      return {
        ...checkedStates,
        [event.target.name]: event.target.checked,
      };
    });
    console.log(event.target.name);
    let completedTaskList;
    if (event.target.checked) {
      completedTaskList = taskList.filter((task) => event.target.name === task);

      console.log({ completedTaskList });
      // setCompletedList([completedTaskList]);
      setCompletedList((originalCompletedList) => [
        ...originalCompletedList,
        ...completedTaskList,
      ]);
      // This line seems incorrect, it should filter based on some condition
      // Logic for when the task is checked
      // alert("Task completed");
      // completedList = ["pen", "book"]
    } else {
      // Logic for when the task is unchecked
      // alert("Task not completed");
      const remainingTasks = completedList.filter(
        (task) => event.target.name !== task
      );
      console.log({ remainingTasks });
      setCompletedList(remainingTasks);
    }
  };
  // const completedDeleteTask = (indexToBeDeleted) => {
  //   const newCompletedList = taskList.filter(
  //     (_item, index) => index !== indexToBeDeleted
  //   );
  //   setCompletedList(newCompletedList);
  // };

  return (
    <div className=" flex flex-col items-center justify-center p-10">
      {/* Green input container */}
      <div className="w-full max-w-2xl bg-green-100 p-6 rounded shadow-md">
        <div className="flex w-full space-x-2">
          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow border border-gray-300 rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600 transition duration-200"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-red-500 mt-6 w-full max-w-2xl p-6 space-y-2">
        <h1 className="text-white text-xl font-bold mb-4 ">TASKS ADDED</h1>

        {taskList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={item}
                checked={checkedStates[item] || false}
                onChange={(e) => handleChange(e)}
                id="taskDone"
                className="w-5 h-5"
              />
              <label
                htmlFor="taskDone"
                className="text-lg"
                style={checkedStates[item] === true ? { color: "red",textDecoration: "line-through" } : {}}
              >
                {item}
              </label>
            </div>
            <button
              onClick={() => handleDeleteTask(index)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="bg-red-500 mt-6 w-full max-w-2xl p-6 space-y-2">
        <h1 className="text-white text-xl font-bold mb-4 ">TASKS COMPLETED</h1>

        <ul className="flex flex-col  bg-white p-4 rounded shadow">
          {completedList.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item}
              {/* <button
                onClick={() => completedDeleteTask(index)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Delete
              </button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
