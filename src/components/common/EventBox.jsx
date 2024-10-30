import React from "react";

const EventBox = (props) => {
  return (
    <div class="w-80 h-[375px] rounded-lg flex flex-col gap-3 items-start justify-start text-white">
      <img src={props.image} alt="" className="w-full h-[160px] rounded-md" />
      <h1 className="mt-1 font-medium text-xl">{props.title}</h1>
      <h3 className="text-sm font-medium opacity-70">12 years old</h3>
      <p className="text-sm opacity-75 leading-6 text-wrap">
        {props.description}
      </p>
      <p className="text-yellow-300 text-xs font-medium">Read more</p>
    </div>
  );
};

export default EventBox;
