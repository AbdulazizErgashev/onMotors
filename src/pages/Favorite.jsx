import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function Favorite() {
  const { liked, handleLike, likedCount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <main>
      <section className="w-full max-w-[1200px] mx-auto flex flex-col items-center md:items-start gap-y-5 min-h-screen mt-28 mb-10">
        <h1 className="text-xl md:text-2xl font-bold text-[#006A67]">
          Liked Products: {likedCount}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center">
          {liked.length > 0 ? (
            liked.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg w-full flex flex-col items-center gap-3 rounded-lg"
              >
                <img
                  src={item.img}
                  className="object-cover w-[300px] h-[150px] rounded-t-lg"
                  alt={item.title}
                />
                <h1 className="text-[#006A67] text-base font-semibold text-center">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold text-[#006A67]">
                  $ {item.price}
                </p>
                <div className="w-full flex items-center justify-between px-3 pb-5">
                  <button>
                    <IoMdCart className="text-xl text-[#006A67]" />
                  </button>
                  <button onClick={() => handleLike(item)}>
                    <FaHeart
                      className={`${
                        liked.some((L) => L.id === item.id)
                          ? "text-red-500"
                          : " text-[#006A67]"
                      } text-lg`}
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p
              className="text-base md:text-xl text-[#006A67] font-semibold cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              No products liked yet!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
