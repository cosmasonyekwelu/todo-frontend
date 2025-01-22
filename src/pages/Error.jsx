import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error">
        <h2>404</h2>
        <h4>Not Found</h4>
        <p>The resource requested could not be found in this server!</p>
        <Link to="/">
          <button>GO TO COVERPAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
