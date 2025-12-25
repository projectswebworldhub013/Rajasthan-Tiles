// src/components/AboutSection.jsx
import React from "react";
import {
  Award,
  Users,
  Star,
  Building2,
  Hammer,
  Layers,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/hero/h1.avif";

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-[#F6F7F9]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full text-[#1F2937]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16">

          {/* LEFT SECTION */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#1F2937]">
              About <br />
              <span className="text-[#1F2937]">
                Rajasthan Tiles & Granites
              </span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Rajasthan Tiles & Granites is a trusted destination for premium
              tiles, marbles, granites, and natural stones. Inspired by
              Rajasthan’s rich stone heritage and powered by modern sourcing,
              we serve residential, commercial, and architectural projects
              across India.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Under the leadership of <b className="text-[#1F2937]">Mr. Kamlesh Chaoudhary</b>,
              the company has grown with a strong focus on quality, honest
              pricing, and customer satisfaction—earning long-term trust among
              builders, designers, and homeowners.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our extensive range offers everything from durable ceramic tiles
              to elegant marble slabs and robust granite surfaces—each selected
              to enhance beauty, performance, and longevity.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="max-w-md space-y-8 flex flex-col justify-center md:mt-8">

            {/* Vision */}
            <p className="leading-relaxed text-gray-700">
              Our philosophy is built on trust, craftsmanship, and innovation.
              We aim to deliver surfaces that combine aesthetic excellence with
              structural strength—backed by transparent service and expert
              guidance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-yellow-800 mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">10+</h3>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>

              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 text-yellow-800 mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">1000+</h3>
                <p className="text-xs text-gray-500">Satisfied Clients</p>
              </div>

              <div className="flex flex-col items-center">
                <Star className="w-6 h-6 text-yellow-800 mb-2" />
                <h3 className="text-lg font-bold text-[#1F2937]">Quality</h3>
                <p className="text-xs text-gray-500">Assured Materials</p>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#374151]" />
                <span className="text-sm text-gray-700">Premium Tiles</span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#374151]" />
                <span className="text-sm text-gray-700">Marble & Granite</span>
              </div>

              <div className="flex items-center gap-3">
                <Hammer className="w-6 h-6 text-[#374151]" />
                <span className="text-sm text-gray-700">Natural Stones</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#374151]" />
                <span className="text-sm text-gray-700">
                  Trusted Quality & Finish
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">

              {/* Button 1 */}
              <Link to="/gallery" className="w-full">
                <button className="cursor-pointer w-full px-8 py-4 bg-white text-gray-700 text-base rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 transition font-semibold">
                  View Collections
                </button>
              </Link>

              {/* Button 2 */}
              <Link to="/contact" className="w-full">
                <button className="cursor-pointer w-full px-8 py-4 bg-[#1F2937] text-white text-base rounded-full shadow-md hover:opacity-90 transition font-semibold">
                  Contact Us
                </button>
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
