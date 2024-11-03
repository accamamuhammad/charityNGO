import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceBox = (props) => {
  const boxStyling =
    "group w-fit h-72 shadow-md flex flex-col gap-4 md:w-[90%] p-6 aspect-square rounded-lg hover:bg-green-800";

  const innerBox =
    "w-[35%] text-5xl lg:text-6xl aspect-square group-hover:bg-yellow-300 bg-slate-100 rounded-md flex items-center justify-center";

  return (
    <div className={boxStyling}>
      {/* <div className={innerBox}>{props.image}</div> */}
      <div className={innerBox}>{props.image}</div>
      <h1 className="text-lg md:text-[16px] lg:text-xl font-bold mt-2.5 opacity-75 group-hover:text-white">
        {props.title}
      </h1>
      <p className="text-sm md:text-[12px] lg:text-sm leading-6 text-black group-hover:text-white opacity-80">
        {props.description}
      </p>
    </div>
  );
};

export default ServiceBox;
