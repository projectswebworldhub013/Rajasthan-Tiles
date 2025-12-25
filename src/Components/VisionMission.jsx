import React from "react";
import visionImg from "../assets/images/i4.jpeg";
import missionImg from "../assets/images/gallery/g8.jpeg";

export default function VisionMission() {
  return (
    <section className="w-full bg-[#F6F7F9] py-20 px-6 md:px-16">

      {/* MAIN HEADING SECTION */}
      <div className="text-center mb-20">

        {/* Decorative Lines + Heading */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="hidden md:block w-24 h-[2px] bg-[#E5E7EB]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-[#1F2937]">
            Building Spaces with Strength,<br className="hidden md:block" />
            Elegance & Lasting Quality
          </h2>
          <div className="hidden md:block w-24 h-[2px] bg-[#E5E7EB]" />
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          At Rajasthan Tiles & Granites, our vision and mission are rooted in
          craftsmanship, trust, and delivering premium surfaces that elevate
          residential and commercial spaces alike.
        </p>
      </div>

      {/* VISION SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center border-y border-[#E5E7EB] py-14">

        {/* Left Image */}
        <div>
          <img
            src={visionImg}
            alt="Vision of Rajasthan Tiles & Granites"
            className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Right Text */}
        <div className="text-[#1F2937] leading-relaxed">
          <h3 className="text-3xl md:text-4xl text-[#1F2937] font-semibold mb-4">
            Our Vision
          </h3>

          <p className="text-lg text-gray-500">
            At{" "}
            <span className="font-semibold text-[#1F2937]">
              Rajasthan Tiles & Granites
            </span>
            , our vision is to become a nationally recognized name in premium
            tiles, marbles, granites, and natural stones—admired for quality,
            integrity, and timeless design.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            We envision inspiring architects, designers, builders, and
            homeowners by offering surfaces that combine natural beauty,
            structural strength, and modern aesthetics—creating spaces that
            endure for generations.
          </p>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-14">

        {/* Left Text */}
        <div className="text-[#1F2937] leading-relaxed">
          <h3 className="text-3xl md:text-4xl text-[#1F2937] font-semibold mb-4">
            Our Mission
          </h3>

          <p className="text-lg text-gray-500">
            Our mission is to supply superior-quality tiles, marbles, and
            granites sourced from trusted manufacturers and quarries, ensuring
            consistency, durability, and refined finishes in every product.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            We strive to offer a wide range of materials at honest prices while
            guiding customers with expert knowledge—helping them choose the
            right surface for both functional and aesthetic needs.
          </p>

          <p className="text-lg text-gray-500 mt-4">
            Through transparent service, timely delivery, and long-term
            relationships, Rajasthan Tiles & Granites is committed to being a
            dependable partner in every construction and design journey.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={missionImg}
            alt="Mission of Rajasthan Tiles & Granites"
            className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </section>
  );
}
