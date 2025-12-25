import React from "react";

const COLORS = {
  sectionBg: "#F6F7F9",
  heading: "#1F2937",
  text: "#6B7280",
  white: "#FFFFFF",
  lightGray: "#D1D5DB",
  borderGray: "#E5E7EB",
  shadow: "rgba(0,0,0,0.1)",
};

const MapSection = () => {
  return (
    <section
      id="location"
      className="py-20 px-4 md:px-12 lg:px-24"
      style={{ backgroundColor: COLORS.sectionBg }}
    >
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: COLORS.heading }}
        >
          Visit Rajasthan Tiles & Granites
        </h2>

        <p
          className="max-w-2xl mx-auto text-sm md:text-base"
          style={{ color: COLORS.text }}
        >
          Explore our premium tiles, marbles, and granite collections at our
          locations. We welcome architects, builders, and homeowners to visit us.
        </p>
      </div>

      {/* MAPS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LOCATION 1 */}
        <div
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            boxShadow: `0 10px 30px ${COLORS.shadow}`,
            border: `1px solid ${COLORS.borderGray}`,
          }}
        >
          <div className="p-6 border-b" style={{ borderColor: COLORS.borderGray }}>
            <h3
              className="text-xl font-semibold"
              style={{ color: COLORS.heading }}
            >
              Rajasthan Tiles & Granites – Rajasthan
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: COLORS.text }}
            >
              Manufacturing & sourcing hub for premium natural stones and tiles.
            </p>
          </div>

          <div className="h-[260px] md:h-[340px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652225.8496521735!2d73.8783471!3d26.62840645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766687206077!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
              title="Rajasthan Tiles & Granites Rajasthan Location"
            />
          </div>
        </div>

        {/* LOCATION 2 */}
        <div
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            boxShadow: `0 10px 30px ${COLORS.shadow}`,
            border: `1px solid ${COLORS.borderGray}`,
          }}
        >
          <div className="p-6 border-b" style={{ borderColor: COLORS.borderGray }}>
            <h3
              className="text-xl font-semibold"
              style={{ color: COLORS.heading }}
            >
              Rajasthan Tiles & Granites – Aligarh (UP)
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: COLORS.text }}
            >
              Display showroom for tiles, granite, marble & stone solutions.
            </p>
          </div>

          <div className="h-[260px] md:h-[340px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112827.69730437464!2d78.08867855000001!3d27.906099249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766687264409!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
              title="Rajasthan Tiles & Granites Aligarh Location"
            />
          </div>
        </div>
      </div>

      {/* FOOT NOTE */}
      <div className="max-w-5xl mx-auto mt-14 text-center">
        <p
          className="text-sm md:text-base"
          style={{ color: COLORS.text }}
        >
          <strong style={{ color: COLORS.heading }}>Office Hours:</strong>{" "}
          Monday – Saturday | 9:00 AM – 7:00 PM
        </p>
      </div>
    </section>
  );
};

export default MapSection;
