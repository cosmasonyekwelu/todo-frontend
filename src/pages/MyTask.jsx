import React from "react";
import { Link } from "react-router-dom";
import plus from "../assets/Plus.png";
import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const MyTask = ({ baseURL }) => {
  const test = useFetch(`${baseURL}/api/task/get`);

  const { data, setData, error, loading } = test;

  // Defin as asynchronous function "handleDelete" that takes an id as a parameter
  const handleDelete = async (id) => {
    // Updates the "data" state by filtering out the task with the given id.
    // "setData" is a state updater function comng from useFetch hook.
    setData((prevData) => {
      // Use ".filter" to create a new array that excludes the task whose _id matches the given id
      return prevData.filter((task) => {
        return task._id !== id; // Return only tasks that do not match the id  to keep them in the new array.
      });
    });

    // Create an object representing the HTTP method

    const deleteTask = {
      method: "DELETE", // Specify that this is a Delete request
    };

    // Send a DELETE request to the API endpoint for deleting the task with the given id.
    // Use template literals to dynamically include the "id" in the URL

    const respon = await fetch(`${baseURL}/api/task/${id}`, deleteTask);

    // Parse the response JSON from the server

    const data = await respon.json();

    // Check if the response status is 200 (success)

    if (respon.status === 200) {
      // Show a success toast notification with the message from the server.
      toast.success(data.message);
      return; // Exit the function early since the task was successfully deleted.
    }

    // If the response status is not 204, show an error toast notification with the message
    toast.error(data.message);
  };
  return (
    <div className="alltasks-con">
      <div className="my-tasks d-flex justify-content-between align-items-center">
        <h2 className="m-0">My Tasks</h2>
        <Link
          to="/new"
          className="d-flex justify-content-between align-items-center"
        >
          <img src={plus} alt="" />
          <p className="m-0">Add New Task</p>
        </Link>
      </div>

      {/* ========================================== */}

      {data
        ? data.map((task) => {
            const { title, description, tags, _id } = task;

            return (
              <div className="tasks-content">
                <div className="inner-tasks d-flex justify-content-between align-items-end ">
                  <p className="m-0">{tags}</p>
                  <div className="tasks-but d-flex gap-4">
                    <Link
                      to={`/edit/${task._id}`}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <img src={editIcon} alt="" />
                      <p className="m-0">Edit</p>
                    </Link>
                    <button
                      onClick={() => {
                        return handleDelete(_id);
                      }}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img src={deleteIcon} alt="" />
                      <p className="m-0">Delete</p>
                    </button>
                  </div>
                </div>

                <hr />
                <div className="task-details text-start">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        : null}

      {loading ? <p>LOADING...</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default MyTask;
