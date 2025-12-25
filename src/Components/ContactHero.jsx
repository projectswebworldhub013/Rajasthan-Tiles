// src/components/ContactHero.jsx
import React from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import img from "../assets/images/gallery/g20.jpeg";

const ContactHero = () => {
  return (
    <section
      className="mt-24 relative min-h-screen w-full flex items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT: MAIN CONTENT */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              Get in Touch with Rajasthan Tiles & Granites
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-tight text-white">
              Let’s Build <br />
              <span className="text-white">Timeless Spaces Together</span>
            </h1>

            <p className="max-w-md mt-6 leading-relaxed text-gray-300">
              Whether you are planning a home renovation, a commercial project,
              or an architectural installation, our team is here to guide you.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              
              {/* Call Now */}
              <a
                href="tel:+918005661797"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full
                           bg-white text-gray-900 font-semibold text-sm
                           hover:bg-gray-100 transition shadow-lg"
              >
                <FaPhoneAlt className="text-yellow-500" />
                Call Now
              </a>

              {/* Get Enquiry */}
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full
                           border border-white/40 text-white font-semibold text-sm
                           hover:bg-white hover:text-gray-900 transition shadow-lg"
              >
                <FaPaperPlane className="text-yellow-400" />
                Get Enquiry
              </a>

            </div>
          </div>

          {/* RIGHT: SUPPORTING TEXT */}
          <div className="hidden md:flex justify-end">
            <p className="max-w-sm mt-12 leading-relaxed text-gray-300 text-sm text-center">
              From product selection to delivery timelines, we ensure clarity,
              quality, and commitment at every step—helping you choose the
              perfect tiles, marble, granite, or natural stone for your space.
            </p>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm uppercase tracking-wide text-gray-300">
          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">01.</span>
            Expert Product Consultation
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">02.</span>
            Custom Quantity & Project Support
          </div>

          <div className="hover:text-white cursor-pointer transition border-b border-gray-400/40 pb-2">
            <span className="text-yellow-400 mr-2">03.</span>
            Reliable Supply & Timely Delivery
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
