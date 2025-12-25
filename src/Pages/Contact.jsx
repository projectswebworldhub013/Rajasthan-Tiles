import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

import bgContact from "../assets/images/i1.jpg";
import MapSection from "../Components/MapSection";
import ContactHero from "../Components/ContactHero";
import { FaXTwitter } from "react-icons/fa6";

/* SOCIAL LINKS (update later if needed) */
const socialLinks = {
  instagram: "#",
  facebook: "#",
  youtube: "#",
  linkedin: "#",
};

/* COLOR SYSTEM – Rajasthan Tiles & Granites */
const COLORS = {
  sectionBg: "#F6F7F9",
  heading: "#1F2937",
  text: "#6B7280",
  white: "#FFFFFF",
  icon: "#374151",
  border: "#E5E7EB",
  overlayDark: "rgba(0,0,0,0.8)",
  overlayMid: "rgba(0,0,0,0.3)",
  gold: "#FACC15",
};

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      {/* CONTACT SECTION */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F6F7F9]">

        {/* LEFT – CONTACT DETAILS */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between shadow-md bg-[#F6F7F9]"
        >
          <div>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6 border-b-4 inline-block pb-2"
              style={{ borderColor: COLORS.heading, color: COLORS.heading }}
            >
              Contact Rajasthan Tiles & Granites
            </h1>

            <p className="text-lg mb-10" style={{ color: COLORS.text }}>
              Reach out to us for premium tiles, marbles, granites, and natural
              stone solutions for residential, commercial, and architectural projects.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6 text-sm sm:text-base">
              <div>
                <h4 className="font-semibold" style={{ color: COLORS.heading }}>
                  Phone
                </h4>
                <p style={{ color: COLORS.text }}>+91 80056 61797</p>
              </div>

              <div>
                <h4 className="font-semibold" style={{ color: COLORS.heading }}>
                  Email
                </h4>
                <p style={{ color: COLORS.text }}>
                  info@rajasthantilesandgranites.co.in
                </p>
                <p style={{ color: COLORS.text }}>
                  rajasthantilealigarh@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold" style={{ color: COLORS.heading }}>
                  Address
                </h4>
                <p style={{ color: COLORS.text }}>
                  Rajasthan Tiles, Ramghat Road,<br />
                  Nearby Talashpur Gate,<br />
                  Madan Palace Ke Barabar Main Talashpur,<br />
                  Aligarh, Uttar Pradesh – 202002
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-10 flex gap-5 text-lg">
  {[
    {
      Icon: FaXTwitter,
      url: "https://x.com/Rajasthantiles/",
    },
    {
      Icon: FaPinterestP,
      url: "https://www.pinterest.com/Rajasthantiles/",
    },
    {
      Icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/rajasthantiles/",
    },
    {
      Icon: FaFacebookF,
      url: "https://www.facebook.com/Rajasthantilesandgranite/",
    },
    {
      Icon: FaYoutube,
      url: "https://www.youtube.com/@Rajasthantilesandgranites/",
    },
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/rajasthantilesandgranites/",
    },
  ].map(({ Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="transition duration-300"
      style={{ color: COLORS.icon }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = COLORS.heading)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = COLORS.icon)
      }
      aria-label="Social media link"
    >
      <Icon />
    </a>
  ))}
</div>

        </motion.div>

        {/* RIGHT – CONTACT FORM */}
        <motion.div
          id='enquiry-form'
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-md"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: COLORS.overlayDark }}
          />

          {/* FORM */}
         <form
  action="https://formsubmit.co/info@rajasthantilesandgranites.co.in"
  method="POST"
  className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-12 text-white"
>
  {/* Heading */}
  <div className="mb-8">
    <h3 className="text-2xl font-semibold tracking-wide">
      Project Enquiry
    </h3>
    <div className="w-12 h-[2px] bg-yellow-400 mt-2"></div>
  </div>

  {/* Form Fields */}
  <div className="flex flex-col gap-7">
    {/* Name */}
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      className="w-full bg-transparent border-b border-gray-400/70 pb-2 text-sm
      focus:outline-none focus:border-yellow-400 transition placeholder-gray-300"
    />

    {/* Email */}
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full bg-transparent border-b border-gray-400/70 pb-2 text-sm
      focus:outline-none focus:border-yellow-400 transition placeholder-gray-300"
    />

    {/* Phone */}
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      required
      className="w-full bg-transparent border-b border-gray-400/70 pb-2 text-sm
      focus:outline-none focus:border-yellow-400 transition placeholder-gray-300"
    />

    {/* Product Interest Dropdown */}
    <div className="relative">
      <select
        name="product_interest"
        required
        className="w-full bg-transparent border-b border-gray-400/70 pb-2 pr-8 text-sm
        focus:outline-none focus:border-yellow-400 transition appearance-none
        text-white cursor-pointer"
      >
        <option value="" disabled selected hidden>
          Select Product Interest
        </option>
        <option className="bg-white text-gray-800 py-2 px-3" value="Tiles">
          Tiles
        </option>
        <option className="bg-white text-gray-800 py-2 px-3" value="Marbles">
          Marbles
        </option>
        <option className="bg-white text-gray-800 py-2 px-3" value="Granites">
          Granites
        </option>
        <option className="bg-white text-gray-800 py-2 px-3" value="Natural Stones">
          Natural Stones
        </option>
        <option className="bg-white text-gray-800 py-2 px-3" value="Others">
          Others
        </option>
      </select>

      {/* Small Minimal Arrow */}
      <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-gray-300 pointer-events-none">
        ▾
      </span>
    </div>

    {/* Message */}
    <textarea
      name="message"
      placeholder="Tell us about your project requirements"
      required
      rows="3"
      className="w-full bg-transparent border-b border-gray-400/70 pb-2 text-sm
      focus:outline-none focus:border-yellow-400 transition resize-none placeholder-gray-300"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="cursor-pointer w-full mt-6 bg-white text-gray-700 font-semibold py-3 rounded-full
      hover:bg-gray-100 transition shadow-md"
    >
      Send Enquiry
    </button>
  </div>

  {/* Hidden Fields */}
  <input type="hidden" name="_captcha" value="false" />
</form>


        </motion.div>
      </section>

      {/* MAP */}
      <MapSection />
    </>
  );
};

export default ContactPage;
