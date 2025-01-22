import React from "react";
import { Link } from "react-router-dom";
import backarrow from "../assets/backarrow.png";
import downarrow from "../assets/downarrow.png";

const EditTask = () => {
  return (
    <div className="newtask-con text-start">
      <div className="back-to1 d-flex align-items-center gap-1">
        <Link to="/tasks">
          <img src={backarrow} alt="" />
        </Link>
        <h2 className="m-0">Edit Task</h2>
      </div>

      {/* ========================================== */}

      <form action="" className="newtask-form">
        <div className="title-new position-relative">
          <label htmlFor="" className="position-absolute">
            Task Title
          </label>
          <input
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className="w-100 py-4 px-5 rounded-2"
          />
        </div>

        {/* ================================== */}

        <div className="describe-new position-relative">
          <label htmlFor="" className="position-absolute">
            Description
          </label>
          <textarea
            name=""
            id=""
            placeholder="Briefly describe your task..."
            className="w-100 py-4 px-5 rounded-2"
          ></textarea>
        </div>

        {/* ================================== */}

        <div className="tag-new rounded-2 py-4 px-5 position-relative">
          <h3 className="position-absolute">Tags</h3>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-5">
              <p className="m-0 py-1 px-2 rounded-1">Urgent</p>
              <p className="m-0 py-1 px-2 rounded-1">Important</p>
            </div>
            <img src={downarrow} alt="" />
          </div>
        </div>

        {/* ================================== */}

        <button className="but-new mt-4">Done</button>
      </form>

      {/* ================================== */}

      <div className="bk-top my-5 text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default EditTask;
