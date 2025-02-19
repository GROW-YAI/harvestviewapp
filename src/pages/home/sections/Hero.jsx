import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/hydroponics6.jpg",
  "/images/hydroponics9.jpg",
  "/images/hydroponics7.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll();

  // Background moves slower (parallax)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image Carousel (Parallax) */}
      <motion.div
        className="absolute inset-0 w-full h-screen overflow-hidden -z-10"
        style={{ y: backgroundY }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Hydroponics ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 py-32">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold drop-shadow-lg"
        >
          The Future of Farming with NFT Hydroponics
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl max-w-2xl drop-shadow-md"
        >
          Our <strong>NFT Hydroponic System</strong> revolutionizes urban
          farming, allowing you to grow fresh, pesticide-free vegetables
          effortlessly in small spaces. Join the sustainable movement today!
        </motion.p>

        {/* Call to Action Button with Hover Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#contact">
            <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
              Contact Us
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 0], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <span className="text-white text-3xl">↓</span>
      </motion.div>
    </div>
  );
};

export default Hero;
