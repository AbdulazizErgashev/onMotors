import React, { useState } from "react";
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

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product",
      img: Car1,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 2,
      title: "Product",
      img: Car2,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 3,
      title: "Product",
      img: Car3,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 4,
      title: "Product",
      img: Car4,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 5,
      title: "Product",
      img: Car5,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 6,
      title: "Product",
      img: Car6,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 7,
      title: "Product",
      img: Car7,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 8,
      title: "Product",
      img: Car8,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 9,
      title: "Product",
      img: Car9,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 10,
      title: "Product",
      img: Car10,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 11,
      title: "Product",
      img: Car11,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 12,
      title: "Product",
      img: Car12,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 13,
      title: "Product",
      img: Car13,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 14,
      title: "Product",
      img: Car14,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 15,
      title: "Product",
      img: Car15,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 16,
      title: "Product",
      img: Car16,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 17,
      title: "Product",
      img: Car17,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 18,
      title: "Product",
      img: Car18,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 19,
      title: "Product",
      img: Car19,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 20,
      title: "Product",
      img: Car20,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 21,
      title: "Product",
      img: Car21,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 22,
      title: "Product",
      img: Car22,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 23,
      title: "Product",
      img: Car23,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 24,
      title: "Product",
      img: Car24,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 25,
      title: "Product",
      img: Car25,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 26,
      title: "Product",
      img: Car26,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 27,
      title: "Product",
      img: Car27,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 28,
      title: "Product",
      img: Car28,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 29,
      title: "Product",
      img: Car29,
      price: 113000,
      count: 1,
      like: false,
    },

    {
      id: 30,
      title: "Product",
      img: Car30,
      price: 113000,
      count: 1,
      like: false,
    },
  ]);

  return (
    <main>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((item) => (
            <div key={item.id}>
              <img src={item.img} />
              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <div className="flex">
                <button>
                  <IoMdCart />
                </button>
                <button>
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
