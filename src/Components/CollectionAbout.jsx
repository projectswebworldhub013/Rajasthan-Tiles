import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/i1.jpg";
import img2 from "../assets/images/i2.jpg";
import img3 from "../assets/images/i3.jpg";
import img4 from "../assets/images/i4.avif";
import img5 from "../assets/images/hero/hero1.jpg";
import img6 from "../assets/images/hero/hero2.jpg";
import { Link } from "react-router-dom";
import { FaGem } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CollectionAbout = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-8 bg-[#F6F7F9]">

      {/* Section Heading */}
      <motion.div
        className="text-center mb-20 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative Top Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-[1px] w-16 bg-gray-300"></span>
          <FaGem className="text-yellow-400 text-lg" />
          <span className="h-[1px] w-16 bg-gray-300"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#1F2937] leading-tight">
          Crafted Surfaces, <br className="hidden sm:block" />
          <span className="text-[#1F2937]">Timeless Spaces</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-500 text-base md:text-lg tracking-wide leading-relaxed">
          A refined selection of premium tiles, marbles, and granites — inspired by
          nature, perfected for modern architecture.
        </p>

        {/* Decorative Bottom Accent */}
        <div className="mt-8 flex justify-center">
          <div className="h-[3px] w-20 bg-gray-300 rounded-full"></div>
        </div>
      </motion.div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img
            src={img1}
            alt="Premium Floor Tiles"
            className="w-full h-[300px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] min-h-[300px]"
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1F2937]">
            Premium Collections
          </h2>
          <p className="text-gray-500 mb-4 tracking-wide">
            Explore an exclusive range of tiles and natural stones designed for
            homes, offices, and architectural excellence.
          </p>
          <Link to="/contact">
            <button className="bg-white text-gray-700 px-6 py-2 text-xs uppercase rounded-full hover:bg-gray-100 transition shadow">
              Get Enquiry
            </button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img
            src={img2}
            alt="Luxury Marble Slabs"
            className="w-full h-[300px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
          />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img
            src={img3}
            alt="Granite Stone Collection"
            className="w-full h-[220px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] min-h-[220px]"
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1F2937]">
            Inspired by Rajasthan
          </h2>
          <p className="text-gray-500 mb-4 tracking-wide">
            Rooted in the heritage of India’s finest stone regions, refined for
            modern living.
          </p>
          <Link to="/gallery">
            <button className="bg-white text-gray-700 px-6 py-2 text-xs uppercase rounded-full hover:bg-gray-100 transition shadow">
              View Gallery
            </button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img
            src={img4}
            alt="Designer Wall Tiles"
            className="w-full h-[220px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
          />
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <motion.img
            src={img5}
            alt="Natural Stone Finish"
            className="w-full h-[280px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.img
            src={img6}
            alt="Luxury Interior Stones"
            className="w-full h-[280px] object-cover rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-gray-200"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          />
        </div>

        <motion.div
          className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] min-h-[280px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-lg font-bold uppercase mb-2 text-[#1F2937]">
            Build with Confidence
          </h2>
          <p className="text-gray-500 tracking-wide">
            Durable, elegant, and expertly sourced materials that stand the test
            of time.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link to="/about">
          <button className="px-10 py-3 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition duration-300 tracking-wide shadow">
            Explore Our Story
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CollectionAbout;
