import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-7 pb-7 relative flex flex-col justify-between items-center">
      <div className="w-full flex pb-7 flex-col gap-3 items-center">
        <h2 className="text-[22px] font-mono text-center mb-5 text-green-900">
          Join our Newsletter <br />
          Stay up-to-date with us
        </h2>
        <div className="w-full px-8 flex flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[70%] p-3 border rounded-md text-xs"
          />
          <button className="w-[30%] text-sm p-2 bg-yellow-300 text-green-600 font-bold rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      {/* <div className="w-full py-4 bg-secBg border flex items-center flex-row">
        <div className="flex flex-row items-center justify-center gap-6">
          <h1 className="text-green-600 font-bold">NGO</h1>
          <p className="text-sm">Contact us</p>
          <p className="text-sm">Donate now</p>
          <p className="text-sm">About us</p>
        </div>
      </div> */}
      <p className="absolute bottom-4 font-bold font-mono text-xs left-1/2 -translate-x-1/2 text-green-600">
        Built by accama
      </p>
    </div>
  );
};

export default Footer;
