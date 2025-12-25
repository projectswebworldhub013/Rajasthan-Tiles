import React from "react";
import {
  FaGem,
  FaCheckCircle,
  FaIndustry,
  FaHandshake,
} from "react-icons/fa";
import imgLeft from "../assets/images/hero/hero1.jpg";
import imgRight from "../assets/images/hero/hero2.jpg";

const OurStory = () => {
  return (
    <section className="bg-[#FAF7F2] text-[#2E1C12] px-6 md:px-12 lg:px-20 py-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left Content */}
        <div className="flex flex-col">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug text-[#4B2E1E]">
            Crafting Spaces with <br />
            <span className="text-[#C58B2B]">
              Natural Beauty & Lasting Strength
            </span>
          </h2>

          {/* Intro */}
          <p className="mt-6 max-w-xl text-[#6B5E54] leading-relaxed">
            Rajasthan Tiles Marbles and Granites is a trusted name in the Indian
            tiles and natural stone industry, known for delivering premium
            materials that blend durability, elegance, and timeless appeal.
            From residential homes to large commercial developments, we supply
            surfaces that elevate spaces.
          </p>

          <p className="mt-4 max-w-xl text-[#6B5E54] leading-relaxed">
            Based in Aligarh, Uttar Pradesh, we proudly serve customers across
            India by offering an extensive range of tiles, marbles, granites,
            and natural stones sourced from reputed manufacturers and quarries.
            Our approach is rooted in transparency, fair pricing, and long-term
            value.
          </p>

          {/* Small Image */}
          <div className="mt-10 w-[92%] overflow-hidden">
            <img
              src={imgLeft}
              alt="Rajasthan Tiles Showroom"
              className="w-full h-full object-cover rounded-xl shadow-md border border-[#D6C3A3]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          {/* Image */}
          <img
            src={imgRight}
            alt="Premium Marble and Granite Collection"
            className="w-full h-auto object-cover rounded-xl shadow-xl border border-[#D6C3A3]"
          />

          {/* Caption */}
          <p className="mt-4 text-sm italic text-[#6B5E54] max-w-md">
            Every slab, tile, and stone is carefully selected to meet the
            highest standards of quality, finish, and performance.
          </p>

          {/* Detailed Points */}
          <div className="mt-10 space-y-6">
            <h3 className="text-2xl font-semibold text-[#4B2E1E]">
              Why Rajasthan Tiles & Granites
            </h3>

            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <FaHandshake className="text-[#D4A373] text-2xl mt-1" />
              <p className="text-[#6B5E54] leading-relaxed">
                <span className="font-semibold text-[#2E1C12]">
                  Trusted Leadership:
                </span>{" "}
                Under the guidance of Mr. Kamlesh Chaoudhary, our business has
                grown with a strong focus on ethical practices, customer trust,
                and industry expertise.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <FaIndustry className="text-[#C58B2B] text-2xl mt-1" />
              <p className="text-[#6B5E54] leading-relaxed">
                <span className="font-semibold text-[#2E1C12]">
                  Extensive Product Range:
                </span>{" "}
                From modern ceramic and vitrified tiles to premium marbles,
                granites, and natural stones, we cater to diverse design needs
                and budgets.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <FaGem className="text-[#7A8450] text-2xl mt-1" />
              <p className="text-[#6B5E54] leading-relaxed">
                <span className="font-semibold text-[#2E1C12]">
                  Quality & Aesthetics:
                </span>{" "}
                Each product reflects superior craftsmanship, precision
                finishing, and natural beauty that enhances interiors and
                exteriors alike.
              </p>
            </div>

            {/* Point 4 */}
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-[#7A8450] text-2xl mt-1" />
              <p className="text-[#6B5E54] leading-relaxed">
                <span className="font-semibold text-[#2E1C12]">
                  Customer-Centric Service:
                </span>{" "}
                Personalized guidance, transparent pricing, and reliable
                support ensure a smooth experience from selection to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D6C3A3] mt-16"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D6C3A3] text-center mt-8 overflow-hidden">

        <div className="py-10 px-6">
          <h3 className="text-2xl font-bold text-[#C58B2B]">15+</h3>
          <p className="mt-2 text-sm text-[#6B5E54] leading-relaxed">
            Years of Industry Experience <br />
            Built on knowledge and trust.
          </p>
        </div>

        <div className="py-10 px-6">
          <h3 className="text-2xl font-bold text-[#C58B2B]">5000+</h3>
          <p className="mt-2 text-sm text-[#6B5E54] leading-relaxed">
            Satisfied Customers <br />
            Across residential & commercial projects.
          </p>
        </div>

        <div className="py-10 px-6">
          <h3 className="text-2xl font-bold text-[#C58B2B]">1000+</h3>
          <p className="mt-2 text-sm text-[#6B5E54] leading-relaxed">
            Designs & Stone Options <br />
            Crafted for modern living.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
