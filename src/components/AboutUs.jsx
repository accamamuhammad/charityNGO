import React from "react";
import Img1 from "../assets/aboutImages/img1.jpg";

const AboutUs = () => {
  return (
    <div className="w-full flex-col md:py-10 md:flex-row justify-between gap-8 px-[45px] py-6 bg-secBg flex items-center">
      <div className="space-y-3">
        <h3 className="text-green-600 text-sm font-medium">About Us</h3>
        <h1 className="text-3xl sm:text-3xl lg:text-5xl">
          We done with <br />
          your{" "}
          <span className="text-3xl sm:text-3xl lg:text-5xl underline underline-offset-8 decoration-yellow-300">
            help!
          </span>
        </h1>
        <p className=" text-sm mt-1 opacity-70 leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nisi
          pariatur eos incidunt veniam facere sequi recusandae quae, totam ex
          quos. Ducimus porro eligendi consectetur magni, perspiciatis fugiat
          dolor error. Ducimus porro eligendi consectetur magni, perspiciatis
          fugiat dolor error.
        </p>
        <button className="px-3 py-2 mt-2 text-sm font-medium text-green-600 bg-yellow-300 hover:bg-green-600 hover:text-white rounded-md">
          Learn More
        </button>
      </div>
      <img
        src={Img1}
        alt="b"
        className="hidden lg:flex rounded-3xl w-[45%] ml-[10%]"
      />
    </div>
  );
};

export default AboutUs;
