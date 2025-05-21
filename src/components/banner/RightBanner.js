import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
      <img
        src={bannerImg}
        alt="Profile Banner"
        className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
      />
    </div>
  );
};

export default RightBanner;