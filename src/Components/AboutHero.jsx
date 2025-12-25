// src/components/AboutHero.jsx
import React from "react";
import img from "../assets/images/hero/hero1.jpg";

const AboutHero = () => {
  return (
    <section
      className="mt-24 relative min-h-screen w-full flex items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT: MAIN HEADING */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              About Rajasthan Tiles & Granites
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight text-white">
              Timeless Surfaces, <br />
              <span className="text-white">
                Crafted from Stone
              </span>
            </h1>

            <p className="max-w-md mt-6 leading-relaxed text-gray-300">
              Rajasthan Tiles & Granites is a trusted name in premium tiles,
              marbles, granites, and natural stones. We bring together natural
              beauty, strength, and refined finishes to elevate residential,
              commercial, and architectural spaces.
            </p>
          </div>

          {/* RIGHT: SUPPORTING DESCRIPTION */}
          <div className="hidden md:flex justify-end">
            <p className="max-w-sm mt-12 leading-relaxed text-gray-300 text-sm text-center">
              Every slab, tile, and stone is carefully selected to ensure
              durability, elegance, and consistency. Our collections reflect
              timeless design and modern craftsmanship—built to last and
              impress.
            </p>
          </div>
        </div>

        {/* Bottom Highlight Points */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm uppercase tracking-wide text-gray-300">

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">01.</span>
            Premium Tiles & Surface Solutions
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">02.</span>
            Natural Marble & Granite Collections
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">03.</span>
            Strength, Elegance & Lasting Quality
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
