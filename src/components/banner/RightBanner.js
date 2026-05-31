import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
      <div className="w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden flex-shrink-0">
        <img
          src={bannerImg}
          alt="Profile Banner"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default RightBanner;