import React from "react";
import L1 from "../assets/testimonialLogos/l1.jpg";
import L2 from "../assets/testimonialLogos/l2.jpg";
import L3 from "../assets/testimonialLogos/l3.jpg";
import L4 from "../assets/testimonialLogos/l4.jpg";
import L5 from "../assets/testimonialLogos/l5.jpg";

const Testimonial = () => {
  return (
    <div className="w-[90%] overflow-y-hidden bg-white overflow-x-hidden h-36 py-5 gap-4 flex flex-col items-center justify-center">
      <h1 className="text-center font-medium">
        Trusted by <span className="text-yellow-400">500+</span> nonprofits
        acorss <span className="text-yellow-400">85</span> countries
      </h1>
      <div className="w-full flex flex-row gap-32">
        {/* animate-loop-scroll */}
        <div className="flex flex-row gap-20  items-center">
          <img src={L2} className="w-14" />
          <img src={L3} className="w-16" />
          <img src={L4} className="w-10 h-10 rounded-full" />
          <img src={L5} className="w-16" />
        </div>
        <div aria-hidden="true" className="flex flex-row gap-20 items-center">
          <img src={L2} className="w-14" />
          <img src={L3} className="w-16" />
          <img src={L4} className="w-10 h-10 rounded-full" />
          <img src={L5} className="w-16" />
        </div>
        <div aria-hidden="true" className="flex flex-row gap-20 items-center">
          <img src={L2} className="w-14" />
          <img src={L3} className="w-16" />
          <img src={L4} className="w-10 h-10 rounded-full" />
          <img src={L5} className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
