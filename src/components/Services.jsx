import React from "react";
import ServiceBox from "./common/serviceBox";

const Services = () => {
  return (
    <div className="w-full px-[45px] py-8 space-y-6">
      <h1 className="text-2xl sm:text-2xl lg:text-3xl">
        Our {/* */}
        <span className="underline decoration-4 underline-offset-2 decoration-yellow-300">
          Services
        </span>
      </h1>
      <div className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceBox
          title="Free meals"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          title="Education"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          title="Boreholes"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          title="Healthcare"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          title="Allowance"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          title="Loans"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
      </div>
    </div>
  );
};

export default Services;
