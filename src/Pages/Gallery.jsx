import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Sparkles, Layers3 } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";

/* GALLERY IMAGES (STARTING FROM g1) */
import g1 from "../assets/images/gallery/g1.jpeg";
import g2 from "../assets/images/gallery/g3.jpeg";
import g3 from "../assets/images/gallery/g2.jpeg";
import g4 from "../assets/images/gallery/g4.jpeg";
import g5 from "../assets/images/gallery/g7.jpeg";
import g6 from "../assets/images/gallery/g6.jpeg";
import g7 from "../assets/images/gallery/g5.jpeg";
import g8 from "../assets/images/gallery/g8.jpeg";
import g9 from "../assets/images/gallery/g14.jpeg";
import g10 from "../assets/images/gallery/g10.jpeg";
import g12 from "../assets/images/gallery/g12.jpeg";
import g14 from "../assets/images/gallery/g19.jpeg";
import g15 from "../assets/images/gallery/g15.jpeg";
import g16 from "../assets/images/gallery/g16.jpeg";
import g17 from "../assets/images/gallery/g17.jpeg";
import g18 from "../assets/images/gallery/g18.jpeg";
import g19 from "../assets/images/gallery/g19.jpeg";
import g20 from "../assets/images/gallery/g20.jpeg";
import g21 from "../assets/images/gallery/g21.jpeg";
import g22 from "../assets/images/gallery/g22.jpeg";
import g23 from "../assets/images/gallery/g23.jpeg";
/* STONE BRAND COLOR SYSTEM */
const COLORS = {
  accent: "#C9A24D",        // warm stone gold
  section: "#F6F7F9",       // soft cloud gray
  heading: "#1F2937",       // deep slate
  text: "#6B7280",          // muted gray
  border: "#E5E7EB",
};

export default function Gallery() {
  const images = [
    g1, g2, g3, g4, g5,
    g6, g7, g8, g9, g10,
 g12,  g14, g15,
    g16, g17, g18, g19, g20,
    g21, g22, g23,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Screen detection */
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = isDesktop ? images.slice(0, images.length - 1) : images;

  const closeModal = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : visibleImages.length - 1
    );
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev < visibleImages.length - 1 ? prev + 1 : 0
    );

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      <GalleryHero />

      {/* GALLERY SECTION */}
      <section className="w-full py-20 px-4 bg-[#F6F7F9]" id="gallery">
        {/* HEADING */}
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          {/* Soft glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-[#C9A24D]/10 blur-3xl rounded-full -z-10"></div>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 bg-white"
            style={{ borderColor: COLORS.border }}
          >
            <Sparkles size={14} className="text-[#C9A24D]" />
            <span className="text-xs tracking-widest uppercase font-semibold text-gray-700">
              Stone Craftsmanship
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            style={{ color: COLORS.heading }}
          >
            Surfaces That{" "}
            <span className="text-[#C9A24D]">Define Spaces</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-10 h-[2px] bg-[#E5E7EB]" />
            <Layers3 size={22} className="text-[#C9A24D]" />
            <span className="w-10 h-[2px] bg-[#E5E7EB]" />
          </div>

          {/* Description */}
          <p
            className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.text }}
          >
            A curated visual journey through our premium collection of{" "}
            <span className="font-semibold text-[#1F2937]">
              tiles, marble, granite, and natural stone
            </span>{" "}
            — showcasing finishes that balance strength, elegance, and timeless appeal.
          </p>
        </div>

        {/* IMAGE GRID (UNCHANGED LAYOUT & SIZE) */}
        <div className="max-w-7xl mx-auto grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visibleImages.map((src, index) => {
            const isLarge = index % 6 === 0 || index % 6 === 1;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden cursor-pointer rounded-xl border bg-white
                  aspect-square
                  ${isLarge ? "lg:col-span-2 lg:aspect-[16/8]" : ""}
                `}
                style={{ borderColor: COLORS.border }}
              >
                <img
                  src={src}
                  alt={`Rajasthan Tiles & Granites ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MODAL VIEW */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full text-white bg-black/70 hover:bg-black"
            >
              <X size={26} />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              <motion.img
                key={selectedIndex}
                src={visibleImages[selectedIndex]}
                alt="Stone Surface View"
                className="max-h-[80vh] w-full object-contain rounded-xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              />

              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-3 md:-left-12 p-2 rounded-full text-white bg-black/70 hover:bg-black"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 md:-right-12 p-2 rounded-full text-white bg-black/70 hover:bg-black"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
