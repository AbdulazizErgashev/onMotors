import React, { useContext, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Car1 from "../assets/merc/a-class.jpg";
import Car2 from "../assets/merc/c-class.jpg";
import Car3 from "../assets/merc/cls.png";
import Car4 from "../assets/merc/e-class.jpeg";
import Car5 from "../assets/merc/gClass.jpg";
import Car6 from "../assets/merc/gla.jpg";
import Car7 from "../assets/merc/glb.jpg";
import Car8 from "../assets/merc/glc.jpg";
import Car9 from "../assets/merc/gle.jpg";
import Car10 from "../assets/merc/gls.jpg";
import Car11 from "../assets/merc/maybah.jpg";
import Car12 from "../assets/bmw/bmw-m8.jpg";
import Car13 from "../assets/bmw/bmw-7.webp";
import Car14 from "../assets/bmw/bmw-m5.webp";
import Car15 from "../assets/gm-uzbekistan/equinox.png";
import Car16 from "../assets/gm-uzbekistan/lacetti.png";
import Car17 from "../assets/gm-uzbekistan/malibu.png";
import Car18 from "../assets/gm-uzbekistan/tahoe.png";
import Car19 from "../assets/lambo/aventador.jpg";
import Car20 from "../assets/lambo/huracan.jpg";
import Car21 from "../assets/lambo/sian.jpg";
import Car22 from "../assets/lambo/urus.jpg";
import Car23 from "../assets/products/rolls/cullinan.jpg";
import Car24 from "../assets/products/rolls/dawn.jpg";
import Car25 from "../assets/products/rolls/ghost.webp";
import Car26 from "../assets/products/rolls/Phantom.webp";
import Car27 from "../assets/toyota/camry.png";
import Car28 from "../assets/toyota/landcruiser.jpg";
import Car29 from "../assets/toyota/supra.jpg";
import Car30 from "../assets/bmw/bmw-x7.webp";
// import { ShopContext } from "../context/ShopContext";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Mercedes-Benz A class",
      img: Car1,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 2,
      title: "Mercedes-Benz C class",
      img: Car2,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 3,
      title: "Mercedes-Benz CLS",
      img: Car3,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 4,
      title: "Mercedes-Benz E class",
      img: Car4,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 5,
      title: "Mercedes-Benz G class",
      img: Car5,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 6,
      title: "Mercedes-Benz GLA",
      img: Car6,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 7,
      title: "Mercedes-Benz GLB",
      img: Car7,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 8,
      title: "Mercedes-Benz GLC",
      img: Car8,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 9,
      title: "Mercedes-Benz GLE",
      img: Car9,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 10,
      title: "Mercedes-Benz GLS",
      img: Car10,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 11,
      title: "Mercedes-Benz MAYBACH",
      img: Car11,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 12,
      title: "BMW M8",
      img: Car12,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 13,
      title: "BMW 7",
      img: Car13,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 14,
      title: "BMW M5",
      img: Car14,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 15,
      title: "CHEVROLET EQUINOX",
      img: Car15,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 16,
      title: "CHEVROLET GENTRA",
      img: Car16,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 17,
      title: "CHEVROLET MALIBU",
      img: Car17,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 18,
      title: "CHEVROLET TAHOE",
      img: Car18,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 19,
      title: "Lamborghini Aventador",
      img: Car19,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 20,
      title: "Lamborghini Huracan",
      img: Car20,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 21,
      title: "Lamborghini Sian",
      img: Car21,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 22,
      title: "Lamborghini Urus",
      img: Car22,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 23,
      title: "Rolls-Royce Cullinan",
      img: Car23,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 24,
      title: "Rolls-Royce Dawn",
      img: Car24,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 25,
      title: "Rolls-Royce Ghost",
      img: Car25,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 26,
      title: "Rolls-Royce Phantom",
      img: Car26,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 27,
      title: "Toyota Camry",
      img: Car27,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 28,
      title: "Toyota Land Cruiser",
      img: Car28,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 29,
      title: "Toyota Supra",
      img: Car29,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 30,
      title: "BMW X7",
      img: Car30,
      price: 113000,
      count: 1,
      like: false,
    },
  ]);

  const toggleLike = (ID) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === ID ? { ...product, like: !product.like } : product
      )
    );
  };

  return (
    <main>
      <section className="w-full max-w-[1200px] mx-auto flex items-center justify-center min-h-screen mt-28 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center">
          {products.map((item) => (
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
                <button onClick={() => toggleLike(item.id)}>
                  <FaHeart
                    className={`${
                      item.like ? "text-red-500" : " text-[#006A67]"
                    } text-lg`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
