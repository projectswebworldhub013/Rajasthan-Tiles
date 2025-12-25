import React from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images (replace with your real assets)
import tilesImg from "../assets/images/tiles.jpg";
import marbleImg from "../assets/images/marbel.jpg";
import graniteImg from "../assets/images/granite.jpg";
import stoneImg from "../assets/images/natural-stone.jpg";

const collections = [
  {
    title: "Tiles",
    subtitle: "Wall & Floor Solutions",
    rating: "4.8 (2.1k)",
    location: "Residential & Commercial",
    image: tilesImg,
  },
  {
    title: "Marbles",
    subtitle: "Luxury Stone Finish",
    rating: "4.9 (1.6k)",
    location: "Imported & Indian",
    image: marbleImg,
  },
  {
    title: "Granites",
    subtitle: "Strength Meets Style",
    rating: "4.7 (1.9k)",
    location: "Heavy-Duty Surfaces",
    image: graniteImg,
  },
  {
    title: "Natural Stones",
    subtitle: "Timeless Textures",
    rating: "4.8 (1.3k)",
    location: "Sandstone • Limestone",
    image: stoneImg,
  },
];

export default function SurfaceCollections() {
  return (
    <section className="bg-[#F6F7F9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937]">
              Surface Collections
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Explore premium surfaces engineered for elegance, durability,
              and architectural excellence.
            </p>
          </div>

          <button className="hidden md:inline-flex px-5 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            View more
          </button>
        </div>

        {/* CARDS */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, index) => (
              <div
                key={index}
                className="relative h-[360px] rounded-2xl overflow-hidden group cursor-pointer bg-gray-200"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>

                  <div className="flex items-center justify-between mt-3 text-xs text-gray-300">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span>{item.rating}</span>
                    </div>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="absolute -bottom-16 right-0 flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <FaChevronLeft className="text-gray-700 text-sm" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
              <FaChevronRight className="text-gray-700 text-sm" />
            </button>
          </div>
        </div>

        {/* MOBILE VIEW MORE */}
        <div className="mt-16 flex justify-center md:hidden">
          <button className="px-6 py-2 rounded-full bg-white shadow text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            View more
          </button>
        </div>

      </div>
    </section>
  );
}
