import React from "react";
import HeroImage from "../assets/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HeroPage = () => {
  return (
    <main className="w-full h-fit px-8 pt-5 pb-5 overflow-x-hidden flex flex-col md:flex-row gap-5 items-center justify-center bg-mainBg">
      <div className="w-full flex flex-col gap-4 overflow-hidden">
        <h1 className="text-5xl sm:text-4xl lg:text-6xl lg:leading-[75px] font-semibold text-white leading-[75px] sm:leading-[50px]">
          <span className="text-6xl sm:text-5xl lg:text-6xl underline underline-offset-8 decoration-yellow-300">
            Charity
          </span>{" "}
          is <br />
          an Act of <br /> A Soft Heart!
        </h1>
        <p className="w-fit sm:w-96 text-white opacity-70 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere
          ipsum autem et consequuntur. Temporibus ratione error laborum labore
        </p>
        <div className="space-x-7 mt-3 flex flex-row items-center">
          <button className="px-3.5 py-2.5 text-mainBg text-sm font-semibold bg-yellow-300 border-2 border-yellow-300 hover:text-yellow-300 hover:bg-transparent rounded-md">
            Get Started
          </button>
          <button className="text-white text-sm opacity-70 hover:opacity-85 flex flex-row gap-2 items-center">
            <span className="w-5 h-5 pl-0.5 border rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} size="2xs" color="white" />
            </span>
            How it Works
          </button>
        </div>
      </div>
      <div className="w-full md:w-[1100px] lg:w-full relative flex items-center justify-center">
        <img
          src={HeroImage}
          className="w-[85%] aspect-square sm:w-[80%] rounded-full opacity-35 flex items-center justify-center"
        />
        <img
          src={HeroImage}
          className="w-[70%] sm:w-[70%] aspect-square rounded-full  opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-50%] z-20 bg-green-500"
        ></img>
      </div>
    </main>
  );
};

export default HeroPage;
