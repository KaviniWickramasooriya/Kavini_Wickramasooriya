import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 border-b-[1px] border-b-black font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
