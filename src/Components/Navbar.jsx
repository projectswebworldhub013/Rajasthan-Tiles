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
  FaCertificate,
} from "react-icons/fa";
import logo from "../assets/images/rajasthan-tiles-logo.png"; // update path if needed

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const categories = [
    { name: "Tiles", path: "/categories/tiles" },
    { name: "Marble", path: "/categories/marble" },
    { name: "Granite", path: "/categories/granite" },
    { name: "Natural Stones", path: "/categories/natural-stones" },
    { name: "Accessories", path: "/categories/accessories" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Info Bar */}
      <div
        className={`bg-[#1F140D] text-[#D4A373] text-sm transition-all duration-500 overflow-hidden ${
          showTop ? "h-10 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-10">
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#C58B2B]" />
            <span>+91 80056 61797</span>
            <span className="hidden md:inline">|</span>
            <FaEnvelope className="text-[#C58B2B] hidden md:inline" />
            <span className="hidden md:inline">
              info@rajasthantilesandgranites.co.in
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span>GSTIN: 09DAZPC9757C1Z1</span>
            <span>|</span>
            <span>UDYAM: UP-02-0091593</span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-[#FAF7F2] border-b border-[#D6C3A3]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Rajasthan Tiles and Granites" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[#2E1C12] font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="flex items-center gap-1 hover:text-[#C58B2B] transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Categories Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#C58B2B] transition">
                <FaThLarge />
                Categories
                <FaChevronDown className="text-xs mt-1" />
              </button>

              <ul className="absolute left-0 mt-3 w-56 bg-[#EFE6D8] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={cat.path}
                      className="block px-5 py-3 text-sm text-[#2E1C12] hover:bg-[#D4A373]/20 hover:text-[#4B2E1E] transition"
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
            <FaBars size={24} className="text-[#4B2E1E]" />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#FAF7F2] shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#D6C3A3]">
          <h2 className="text-lg font-bold text-[#4B2E1E]">Menu</h2>
          <FaTimes
            size={22}
            className="text-[#4B2E1E]"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-3 border-b text-[#2E1C12] hover:text-[#C58B2B]"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Mobile Categories */}
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="flex items-center justify-between w-full py-3 text-[#2E1C12]"
          >
            <span className="flex items-center gap-2">
              <FaThLarge /> Categories
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
                  className="block py-2 text-sm text-[#6B5E54] hover:text-[#C58B2B]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
