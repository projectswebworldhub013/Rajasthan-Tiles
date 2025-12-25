// src/components/GalleryHero.jsx
import React from "react";
import img from "../assets/images/gallery/g8.jpeg"; // update path if needed

const GalleryHero = () => {
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
              Our Stone Collections
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight text-white">
              Crafted in Stone, <br />
              <span className="text-white">
                Displayed with Pride
              </span>
            </h1>

            <p className="max-w-md mt-6 leading-relaxed text-gray-300">
              Explore a curated visual showcase of premium tiles, marbles,
              granites, and natural stones. Each surface reflects precision,
              character, and the timeless beauty of nature—crafted to elevate
              every space.
            </p>
          </div>

          {/* RIGHT: SUPPORTING DESCRIPTION */}
          <div className="hidden md:flex justify-end">
            <p className="max-w-sm mt-12 leading-relaxed text-gray-300 text-sm text-center">
              From elegant interiors to bold architectural statements, our
              gallery captures the versatility, texture, and finish of stones
              that define lasting luxury and performance.
            </p>
          </div>
        </div>

        {/* Bottom Highlight Points */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm uppercase tracking-wide text-gray-300">

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">01.</span>
            Premium Tile Installations
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">02.</span>
            Marble & Granite Finishes
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">03.</span>
            Natural Stone in Real Spaces
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
