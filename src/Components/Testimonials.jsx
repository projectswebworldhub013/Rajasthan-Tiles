import React, { useEffect, useState } from "react";
import { FaUserCircle, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
const testimonials = [
  {
    name: "Amit Verma",
    feedback:
      "The marble quality from Rajasthan Tiles & Granites is exceptional. The finish, durability, and elegance truly transformed our living space.",
  },
  {
    name: "Neha Sharma",
    feedback:
      "We sourced granite slabs for our commercial project, and the consistency in quality and timely delivery exceeded expectations.",
  },
  {
    name: "Rahul Mehta",
    feedback:
      "Their tile collection offers modern designs with a premium feel. Perfect balance of aesthetics and strength.",
  },
  {
    name: "Pooja Jain",
    feedback:
      "Natural stones sourced here reflect true craftsmanship. Every piece feels refined and timeless.",
  },
  {
    name: "Sanjay Gupta",
    feedback:
      "From consultation to final delivery, the experience was smooth and professional. Highly recommended for premium surfaces.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  /* Auto slide (mobile only) */
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F7F9] py-16">

      {/* Heading */}
<div className="text-center mb-16 px-4 relative">

  {/* Decorative Icon */}
  <div className="flex items-center justify-center gap-4 mb-4">
    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-700">
      <FaQuoteLeft className="text-sm" />
    </div>

    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  </div>

  {/* Main Heading */}
  <h3 className="text-3xl md:text-4xl font-semibold text-[#1F2937] tracking-wide">
    Client Reflections
  </h3>

  {/* Subheading */}
  <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
    Trusted by homeowners, architects, and builders for timeless stone craftsmanship
  </p>

</div>


      {/* Desktop Auto Scroll */}
      <div className="hidden lg:block overflow-hidden w-full">
        <div className="flex gap-6 animate-scrollTestimonial hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, i) => (
            <TestimonialCard key={i} testimonial={item} />
          ))}
        </div>
      </div>

      {/* Mobile / Tablet Slider */}
      <div className="lg:hidden relative max-w-sm mx-auto px-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {/* <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div> */}
      </div>

      {/* Styles */}
      <style>{`
        .animate-scrollTestimonial {
          animation: scrollTestimonial 22s linear infinite;
        }

        @keyframes scrollTestimonial {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

      `}</style>
    </section>
  );
};

/* Card Component */
const TestimonialCard = ({ testimonial }) => (
  <div className="min-w-[280px] max-w-[320px] bg-white border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] px-6 py-6 flex-shrink-0 mx-auto">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-yellow-800 text-3xl shadow-sm">
        <FaUserCircle />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 text-sm">
          {testimonial.name}
        </h4>
        <div className="flex text-yellow-400 text-sm mt-1">
          {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      “{testimonial.feedback}”
    </p>
  </div>
);

export default Testimonials;
