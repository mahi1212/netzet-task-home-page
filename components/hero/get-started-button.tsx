import React from "react";

const GetStartedButton = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center w-full">
      <button
        className="mt-7 md:w-[350px] w-[98%] h-[40px] rounded-[10px] py-2 bg-[#FC004E] text-white
        flex items-center justify-center gap-[10px] font-figtree md:font-urbanist font-[700] text-[20px]"
        style={{
          filter: "drop-shadow(2px 2px 5px #00E7F9)",
        }}
      >
        Get Started
      </button>

      <p className="text-center text-sm font-figtree mt-2 md:ms-13">1-minute quiz for personalized Insights</p>
    </div>
  );
};

export default GetStartedButton;
