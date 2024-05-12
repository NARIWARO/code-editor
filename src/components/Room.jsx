import React from "react";
import Aside from "./Aside";
import Dock from "./Dock";

const Room = () => {
  return (
    <>
      <div className="w-full h-screen flex bg-grey">
        <div className="w-max bg-red">
          <Aside />
        </div>
        <div className="w-full bg-white ">
          <Dock />
        </div>
      </div>
    </>
  );
};

export default Room;
