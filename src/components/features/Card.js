import React from 'react';

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-8 py-10 rounded-lg shadow-shadowOne flex items-start bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className="flex flex-col gap-6 w-full">

        {/* Icon */}
        <div>
          {icon ? (
            <span className="text-5xl text-designColor">{icon}</span>
          ) : (
            <div className="w-10 flex flex-col gap-1">
              <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 group-hover:text-white duration-300">
            {title}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 duration-300">
            {des}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Card;