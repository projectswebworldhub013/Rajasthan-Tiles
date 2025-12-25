import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaPhoneAlt,
  FaCertificate,
  FaPinterestP,
  FaLinkedinIn,
  FaThLarge,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const quickLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
  { name: "Projects", path: "/projects", icon: <FaImages /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "Our Certificates", path: "/certificates", icon: <FaCertificate /> },
];

const categories = [
  { name: "Tiles", path: "/categories/tiles" },
  { name: "Marble", path: "/categories/marble" },
  { name: "Granite", path: "/categories/granite" },
  { name: "Natural Stones & Accessories", path: "/categories/natural-stones" },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-black text-gray-300 pt-20 pb-10 px-6 md:px-16"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm max-w-7xl mx-auto">

        {/* ABOUT */}
        <div className="space-y-4">
          <h4 className="text-3xl font-semibold text-white">
            Rajasthan Tiles & Granites
          </h4>
          <p className="text-gray-400 leading-relaxed">
            Rajasthan Tiles and Granites is a trusted destination for premium
            tiles, marbles, granites, and natural stones. Rooted in quality,
            craftsmanship, and timeless design, we serve residential,
            commercial, and architectural projects with surfaces that define
            elegance and durability.
          </p>

          <a
            href="https://md-in-82.webhostbox.net:2096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 border border-gray-600 text-gray-200 rounded hover:bg-white hover:text-black transition"
          >
            Webmail Login
          </a>

          
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT RANGE */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">
            Product Range
          </h4>
          <ul className="space-y-2 mb-4">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link
                  to={cat.path}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaThLarge /> {cat.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-gray-400 text-sm space-y-1">
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@rajasthantilesandgranites.co.in
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> rajasthantilealigarh@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 80056 61797
            </p>
          </div>
        </div>

        {/* OTHER INFORMATION */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">
            Other Information
          </h4>

          <address className="not-italic leading-relaxed text-gray-400 mb-4">
            Rajasthan Tiles, Ramghat Road, <br />
            Nearby Talashpur Gate, <br />
            Madan Palace Ke Barabar Main Talashpur, <br />
            Aligarh, Uttar Pradesh – 202002
          </address>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-32"></div>
          </div>

          <div className="flex flex-wrap gap-4 text-xl mt-6 text-gray-400">
            <a href="https://x.com/Rajasthantiles/" target="_blank" rel="noreferrer" className="hover:text-white"><FaXTwitter /></a>
            <a href="https://www.pinterest.com/Rajasthantiles/" target="_blank" rel="noreferrer" className="hover:text-white"><FaPinterestP /></a>
            <a href="https://www.linkedin.com/in/rajasthantiles/" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/Rajasthantilesandgranite/" target="_blank" rel="noreferrer" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@Rajasthantilesandgranites/" target="_blank" rel="noreferrer" className="hover:text-white"><FaYoutube /></a>
            <a href="https://www.instagram.com/rajasthantilesandgranites/" target="_blank" rel="noreferrer" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6 space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Rajasthan Tiles & Granites. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-500 hover:underline"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
