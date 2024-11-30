import React from "react";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <main className="bg-white fixed top-0 left-0 right-0 z-50 shadow-xl">
      <nav className="flex items-center justify-between gap-x-3 py-3 px-5 md:px-0 md:gap-x-0 w-full max-w-[1200px] mx-auto">
        <Link to="/">
          <h1 className="text-[#006A67] font-bold text-lg md:text-2xl transition-all duration-150 active:opacity-70">
            onStore
          </h1>
        </Link>
        <div className="w-full max-w-[30rem] flex items-center justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-2 border-[#006a67] text-[#006a67] font-semibold placeholder:text-[#006a67] rounded-l-md outline-none py-1 px-3 md:py-2 md:px-4"
          />
          <button className="border-2 border-[#006a67] bg-[#006a67] text-white font-bold rounded-r-md py-1 px-3 md:py-2 md:px-4 transition-all duration-150 active:opacity-70">
            Search
          </button>
        </div>

        <div className="flex items-center gap-x-3 md:gap-x-5 text-[#006a67]">
          <div
            className="flex items-center gap-x-2 cursor-pointer transition-all duration-150 active:opacity-70"
            onClick={() => navigate("/Favorite")}
          >
            <FaHeart className="text-lg" />
            <span className="hidden md:flex md:text-xl font-bold">
              Favorite
            </span>
          </div>
          <div
            className="flex items-center gap-x-2 cursor-pointer transition-all duration-150 active:opacity-70"
            onClick={() => navigate("/Cart")}
          >
            <IoMdCart className="text-xl" />
            <span className="hidden md:flex md:text-xl font-bold">Cart</span>
          </div>
        </div>
      </nav>
    </main>
  );
}
