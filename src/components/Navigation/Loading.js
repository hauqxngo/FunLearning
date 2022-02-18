import React from "react";

const Loading = () => {
  return (
    <div>
      <h3 className="d-flex justify-content-center text-success my-4">
        Loading...
      </h3>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-success my-2" role="status"></div>
      </div>
    </div>
  );
};

export default Loading;
