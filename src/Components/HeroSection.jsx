import React, { useEffect, useState } from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";

// 🔹 IMPORT BACKGROUND IMAGES
import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero5.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";

const images = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // 🔁 AUTO SLIDE (NO DELAY FEEL)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // smooth & premium timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 relative w-full min-h-screen bg-black overflow-hidden">

      {/* 🔥 BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          >
            <img
              src={img}
              alt="Rajasthan Tiles Background"
              className={`w-full h-full object-cover object-right
                transition-transform duration-[7000ms] ease-linear
                ${index === current ? "scale-110" : "scale-100"}
              `}
            />
          </div>
        ))}

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex items-center min-h-screen">
        <div className="max-w-xl">

          {/* HEADLINE */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Elevate Your Space <br />
            With Premium Tiles <br />
            & Natural Stones
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Trusted supplier of tiles, marbles, and granites delivering elegance,
            durability, and timeless design for homes and commercial projects.
          </p>

          {/* WATCH CTA */}
          <div className="flex items-center gap-4 mt-8 cursor-pointer group">
            <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center group-hover:bg-[#D4A373] transition">
              <FaPlay className="text-[#D4A373] group-hover:text-black text-sm" />
            </div>
            <span className="text-white font-medium tracking-wide">
              Explore Our Collection
            </span>
          </div>

          {/* STATS */}
          <div className="mt-12 hidden md:flex flex-row items-center justify-between">

  {/* Stat 1 */}
  <div className="flex-1 text-center">
    <h3 className="text-md md:text-xl font-bold text-[#D4A373]">
      15<span className="text-xl">+</span>
    </h3>
    <p className="text-gray-300 text-sm mt-2 tracking-wide">
      Years of Excellence
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-14 bg-white/20"></div>

  {/* Stat 2 */}
  <div className="flex-1 text-center mt-6 md:mt-0">
    <h3 className="text-md md:text-xl font-bold text-[#D4A373]">
      5000<span className="text-xl">+</span>
    </h3>
    <p className="text-gray-300 text-sm mt-2 tracking-wide">
      Happy Customers
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-px h-14 bg-white/20"></div>

  {/* Stat 3 */}
  <div className="flex-1 text-center mt-6 md:mt-0">
    <h3 className="text-md md:text-xl font-bold text-[#D4A373]">
      1000<span className="text-xl">+</span>
    </h3>
    <p className="text-gray-300 text-sm mt-2 tracking-wide">
      Exclusive Designs
    </p>
  </div>

          </div>
          {/* QUOTE */}
          <div className="mt-14 border-l-4 border-[#D4A373] pl-6">
            <p className="text-gray-300 italic text-sm leading-relaxed">
              “Quality is not an option — it is our promise. Every slab and tile
              reflects trust, craftsmanship, and excellence.”
            </p>
            <p className="mt-3 text-white font-semibold text-sm">
              — Mr. Kamlesh Chaoudhary, Founder
            </p>
          </div>

        </div>
      </div>

      {/* 🔹 FLOATING CTA */}
      <div className="hidden md:absolute bottom-20 right-8 z-20">
        <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black transition">
          Get Started
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
