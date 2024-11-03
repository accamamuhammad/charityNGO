import React from "react";

const EventBox = (props) => {
  return (
    <div className="w-[300px] h-[400px] rounded-lg flex flex-col gap-3.5 items-start justify-start text-white">
      <img src={props.image} alt="" className="w-full h-[175px] rounded-lg" />
      <h1 className="mt-1 font-medium text-2xl">{props.title}</h1>
      <h3 className="font-medium opacity-70">12 years old</h3>
      <p className="text-sm opacity-75 leading-6 text-wrap">
        {props.description}
      </p>
    </div>
  );
};

export default EventBox;
