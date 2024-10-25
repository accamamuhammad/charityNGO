import React from "react";

const Navbar = () => {
  const listItems =
    "opacity-60 hover:opacity-80 text-sm text-white cursor-pointer hover:decoration-2 hover:underline hover:underline-offset-[10px] hover:decoration-yellow-100";

  return (
    <div
      className="w-full flex bg-mainBg
     flex-row items-center justify-between"
    >
      <h1 className="font-bold text-lg text-white">NGO</h1>
      <ul className="flex flex-row gap-8 items-center">
        <li className={listItems}>About Us</li>
        <li className={listItems}>Explore NGOs</li>
        <li className={listItems}>Are you a Voulenteer</li>
        <li className={listItems}>Contact</li>
        <li className="px-3 py-2 cursor-pointer rounded-md border opacity-70 text-mainBg bg-yellow-200 hover:text-yellow-200 border-2 hover:border-yellow-200 hover:bg-mainBg text-sm font-bold">
          Donate
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
