import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import backarrow from "../assets/backarrow.png";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";
import DropDown from "../components/DropDown";

const EditTask = ({ baseURL }) => {
  // Importing "id" parameter from the current route using the "useParams" hook provided by react router
  const { id } = useParams();

  // Fetching task data from the API using a custom "useFetch" hook, passing the URL dynamically with the "id" parameter.
  // This retrieves specific task details to edited
  const { data } = useFetch(`${baseURL}/api/task/${id}`);

  // Iniatializing a "title" state variable with an empty string to hold the task title.
  // "setTitle" is the function used to update the "title" state
  const [title, setTitle] = useState("");

  // Iniatializing a "description" state variable with an empty string to hold the task description.
  // "setDescription" is the function used to update the "description"
  const [description, setDescription] = useState("");

  // Iniatializing a "tags" state variable with an empty string to hold the task tags.
  // "setTags" is the function used to update the "tags"
  const [tags, setTags] = useState("");

  // Initializing a "sending" state variable to track if the form submission is in progress
  const [sending, setSending] = useState(false);

  // Using the useEffect hook to perform a side effect whenever data changes.
  // This checks if the data object exists and then populates the state variables (title description, tags) with the corresponding fetched from the API
  useEffect(() => {
    if (data) {
      setTitle(data.title); // Set the title state with the fetched title
      setDescription(data.description); // Set the description state with the fetched description
      setTags(data.tags); // Set the tags state with the fetched tags
    }
  }, [data]); // Dependency array ensure that this effect runs only when "data" changes.

  // useNavigate hook from the react router dom is used to programmatically navigate to other routes
  const navigate = useNavigate();

  // Function to handle form submission asynchronously
  const handleSubmit = async (event) => {
    setSending(false); //
    event.preventDefault();

    const editedData = { title, description, tags };

    const oldData = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedData),
    };

    const response = await fetch(`${baseURL}/api/task/${id}`, oldData);

    const resData = await response.json();

    if (response.status === 201) {
      toast.success(resData.message);
      setSending(false);
      navigate("/tasks");
      return;
    } else {
      toast.error(resData.message);
    }

    setSending(false);
  };

  return (
    <div className="newtask-con text-start">
      <div className="back-to1 d-flex align-items-center gap-1">
        <Link to="/tasks">
          <img src={backarrow} alt="" />
        </Link>
        <h2 className="m-0">Edit Task</h2>
      </div>

      {/* ========================================== */}

      <form onSubmit={handleSubmit} action="" className="newtask-form">
        <div className="title-new position-relative">
          <label htmlFor="title" className="position-absolute">
            Task Title
          </label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="w-100 py-4 px-5 rounded-2"
            value={title}
          />
        </div>

        {/* ================================== */}

        <div className="describe-new position-relative">
          <label htmlFor="description" className="position-absolute">
            Description
          </label>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            name=""
            id=""
            placeholder="Briefly describe your task..."
            className="w-100 py-4 px-5 rounded-2"
            value={description}
          ></textarea>
        </div>

        {/* ================================== */}

        <DropDown setTags={setTags} />
        {/* ================================== */}

        <button disabled={sending} className="but-new mt-4">
          Done
        </button>
      </form>

      {/* ================================== */}

      <div className="bk-top my-5 text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default EditTask;
