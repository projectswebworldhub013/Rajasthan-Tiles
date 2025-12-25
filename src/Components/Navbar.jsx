import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaImages,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaThLarge,
  FaProjectDiagram,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/images/rajasthan-tiles-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const categories = [
    { name: "Tiles", path: "/categories/tiles" },
    { name: "Marble", path: "/categories/marble" },
    { name: "Granite", path: "/categories/granite" },
    { name: "Natural Stones & Accessories", path: "/categories/natural-stones" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(!(window.scrollY > lastScrollY && window.scrollY > 80));
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaYoutube />, url: "https://www.youtube.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    { icon: <FaPinterestP />, url: "https://www.pinterest.com" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Info Bar */}
      <div
        className={`bg-[#1F2937] text-gray-300 text-sm transition-all duration-500 overflow-hidden ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-10">
          <div className="flex items-center gap-4">
            <FaPhone className="text-yellow-400" />
            <span>+91 80056 61797</span>
            <span className="hidden md:inline">|</span>
            <FaEnvelope className="text-yellow-400 hidden md:inline" />
            <span className="hidden md:inline">
              info@rajasthantilesandgranites.co.in
            </span>
          </div>

          {/* Social Icons (Desktop Top Bar) */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-[#F6F7F9] border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Rajasthan Tiles & Granites" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="flex items-center gap-1 hover:text-[#1F2937] transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#1F2937] transition">
                <FaThLarge />
                Collections
                <FaChevronDown className="text-xs mt-1" />
              </button>

              <ul className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={cat.path}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#F6F7F9] shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#1F2937]">Menu</h2>
          <FaTimes
            size={22}
            className="text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-3 border-b text-gray-700 hover:text-[#1F2937]"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Mobile Categories */}
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-700"
          >
            <span className="flex items-center gap-2">
              <FaThLarge /> Collections
            </span>
            {categoriesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {categoriesOpen && (
            <div className="pl-4">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={cat.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-gray-500 hover:text-[#1F2937]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Social Icons */}
          <div className="mt-6 flex gap-4 justify-center">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
