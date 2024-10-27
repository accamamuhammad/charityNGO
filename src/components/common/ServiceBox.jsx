import React from "react";

const ServiceBox = (props) => {
  const boxStyling =
    "group w-[320px] sm:w-[100%] shadow-md flex flex-col gap-4 md:w-[90%] p-6 aspect-square rounded-lg hover:bg-green-800";

  const innerBox =
    "w-[40%] aspect-square group-hover:bg-yellow-300 bg-slate-400 rounded-md";

  return (
    <div className={boxStyling}>
      <div className={innerBox}></div>
      <h1 className="text-lg font-bold mt-2.5 opacity-75 group-hover:text-white">
        {props.title}
      </h1>
      <p className="text-sm leading-6 text-black group-hover:text-white opacity-80">
        {props.description}
      </p>
    </div>
  );
};

export default ServiceBox;
