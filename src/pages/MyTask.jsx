import React from "react";
import { Link } from "react-router-dom";
import plus from "../assets/Plus.png";
import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";

const MyTask = () => {
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

      <div className="tasks-content">
        <div className="inner-tasks d-flex justify-content-between align-items-end ">
          <p className="m-0">Urgent</p>
          <div className="tasks-but d-flex gap-4">
            <Link
              to="/edit"
              className="d-flex align-items-center justify-content-between"
            >
              <img src={editIcon} alt="" />
              <p className="m-0">Edit</p>
            </Link>
            <button className="d-flex align-items-center justify-content-center">
              <img src={deleteIcon} alt="" />
              <p className="m-0">Delete</p>
            </button>
          </div>
        </div>

        <hr />
        <div className="task-details text-start">
          <h3>FinTech Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
