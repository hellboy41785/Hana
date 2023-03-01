import React from "react";

const QuoteLoader = () => {
  return (
    <div className="relative flex flex-col w-full p-3 shadow animate-pulse">
      <div
        className="bg-slate-800 h-[100px] lg:h-[250px] -inset-y-11"
      ></div>
      <div className="flex flex-col items-center justify-center w-full gap-4 lg:flex-row">
        <div className="w-[250px] h-[300px] bg-slate-800 rounded-md border border-blue-300 shadow/"></div>
        <div className="flex gap-2">
          <div className="w-28 h-[150px] bg-slate-800 rounded-lg"></div>
          <div className="w-[300px] h-[150px] bg-slate-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default QuoteLoader;
