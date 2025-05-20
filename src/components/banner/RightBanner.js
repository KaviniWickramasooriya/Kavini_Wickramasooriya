import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
      <img
        className="w-[220px] h-[280px] sm:w-[300px] sm:h-[400px] lg:w-[500px] lg:h-[600px] object-cover rounded-full"
        src={bannerImg}
        alt="banner"
      />
    </div>
  );
};

export default RightBanner;