import React from "react";
import loadingGif from "../../assets/images/loading.gif"; // adjust path if needed

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-bodyColor text-lightText">
      <div className="text-center">
        {/* If you want to replace the spinner */}
        <img src={loadingGif} alt="Loading..." className="h-100 w-100 mb-4" />

        {/* If you want to keep both, uncomment the next line */}
        {/* <div className="loader ease-linear rounded-full border-8 border-t-8 border-lightText h-16 w-16 mb-4 animate-spin"></div> */}

        {/* <h2 className="text-xl font-semibold">Loading...</h2> */}
      </div>
    </div>
  );
};

export default Loading;