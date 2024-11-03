import React from "react";
import ServiceBox from "./common/ServiceBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="w-full px-[45px] py-8 space-y-6">
      <h1 className="text-2xl sm:text-2xl lg:text-3xl">
        Our {/* */}
        <span className="underline decoration-4 underline-offset-2 decoration-yellow-300">
          Services
        </span>
      </h1>
      <div className="w-full place-items-center sm:place-items-start grid gap-10 md:gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ServiceBox
          image="🥣"
          title="Free meals"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          image="📚"
          title="Education"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          image="💧"
          title="Boreholes"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          image="🩺"
          title="Healthcare"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          image="💵"
          title="Allowance"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
        <ServiceBox
          image="🏦"
          title="Loans"
          description="   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        iure reprehenderit."
        />
      </div>
    </div>
  );
};

export default Services;
