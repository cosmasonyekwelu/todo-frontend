import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backarrow from "../assets/backarrow.png";
// import downarrow from "../assets/downarrow.png";
import toast from "react-hot-toast";
import DropDown from "../components/DropDown";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [tags, setTags] = useState("Urgent");

  const [sending, setSending] = useState(false);

  const nav = useNavigate();

  const handleSubmit = async (event) => {
    setSending(true);
    event.preventDefault();

    const formData = {
      title,
      description,
      tags,
    };

    const newData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/create`, newData);

    const data = await res.json();

    if (res.status === 400) {
      toast.error(data.message);
      setSending(false);
      return;
    }

    toast.success(data.message);
    setSending(false);
    nav("/tasks");
  };

  return (
    <div className="newtask-con text-start">
      <div className="back-to1 d-flex align-items-center gap-1">
        <Link to="/tasks">
          <img src={backarrow} alt="" />
        </Link>
        <h2 className="m-0">New Task</h2>
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
            id="title"
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
            name="description"
            id="description"
            placeholder="Briefly describe your task..."
            className="w-100 py-4 px-5 rounded-2"
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

export default NewTask;
