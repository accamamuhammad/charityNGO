import React from "react";
import L1 from "../assets/testimonialLogos/l1.jpg";
import L2 from "../assets/testimonialLogos/l2.jpg";
import L3 from "../assets/testimonialLogos/l3.jpg";
import L4 from "../assets/testimonialLogos/l4.jpg";
import L5 from "../assets/testimonialLogos/l5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";

const Testimonial = () => {
  return (
    <div className="flex overflow-hidden space-x-72 my-5">
      <div className="flex space-x-36 animate-loop-scroll">
        <img src={L1} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L2} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L3} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L4} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L5} alt="first1" className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex space-x-36 animate-loop-scroll" aria-hidden="true">
        <img src={L1} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L2} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L3} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L4} alt="first1" className="w-10 h-10 rounded-full" />
        <img src={L5} alt="first1" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Testimonial;
