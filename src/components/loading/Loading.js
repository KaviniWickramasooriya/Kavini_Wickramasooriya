import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-bodyColor text-lightText">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-lightText h-16 w-16 mb-4 animate-spin"></div>
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;