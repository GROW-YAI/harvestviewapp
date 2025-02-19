import { useState } from "react";
import about from "/images/about.jpg";
import hydroponics8 from "/images/hydroponics8.jpg";

const benefits = [
  { icon: "/images/cereals.png", title: "High Yield Crops" },
  { icon: "/images/digger.png", title: "Efficient Farming" },
  { icon: "/images/sunrise.png", title: "Sustainable Growth" },
  { icon: "/images/windmill.png", title: "Eco-Friendly Energy" },
  { icon: "/images/sprout.png", title: "No Soil Needed" },
  
];

const AboutProduct = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="about">
      {/* About Image */}
      <img
        src={about}
        alt="About Us"
        className="w-[80%] mx-auto my-auto mt-[10%] grayscale-[40%] brightness-75"
      />

      <section className="py-16 px-6 bg-white">
        {/* Benefits Icons */}
        <div className="flex justify-center gap-6 md:gap-12 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 mx-auto filter brightness-75 contrast-125"
              />
              <p className="mt-2 font-semibold text-gray-700">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-sm font-semibold text-green-500 uppercase">
              About Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              <span className="text-green-600">Let Us</span> Tell You Our Story
            </h2>
            <p className="text-gray-600 mt-4">
              Our <strong>NFT Hydroponic System</strong> is revolutionizing
              urban farming by enabling fresh, pesticide-free vegetable growth
              in compact spaces. With minimal water usage and no soil needed,
              it's the future of sustainable agriculture!
            </p>

            {showMore && (
              <p className="text-gray-600 mt-4">
                Our hydroponic technology uses{" "}
                <strong>nutrient film techniques</strong> to ensure plants get
                the right balance of water and nutrients, leading to
                <strong> faster growth</strong> and{" "}
                <strong> higher yields</strong>. It’s perfect for urban farming,
                small-scale agriculture, and home gardening.
              </p>
            )}

            {/* Read More / Read Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right Side Image */}
          <div className="relative md:w-1/2 mt-[5%]">
            <img
              src={hydroponics8}
              alt="NFT Hydroponics"
              className="w-full object-cover shadow-lg filter brightness-75 contrast-125"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
