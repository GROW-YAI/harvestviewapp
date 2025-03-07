import { motion } from "framer-motion";
import showcaseNew from "/images/showcaseNew.jpg";
import hydroponics1 from "/images/hydroponics1.png";
import hydroponics8 from "/images/hydroponics8.jpg";

const products = [
  {
    id: 1,
    image: showcaseNew,
    title: "NFT Hydroponic Tower",
    description: "Maximizes vertical space for efficient vegetable production.",
  },
  {
    id: 2,
    image: hydroponics1,
    title: "Automated Irrigation System",
    description:
      "Smart water delivery to optimize plant growth and save water.",
  },
  {
    id: 3,
    image: hydroponics8,
    title: "Organic Nutrient Solution",
    description:
      "Provides essential minerals for healthy and fast plant growth.",
  },
];

const Showcase = () => {
  return (
    <section id="product" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-sm font-semibold text-green-500 uppercase tracking-widest">
          Our Products
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          <span className="text-green-600">Revolutionizing</span> Urban Farming
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Explore our cutting-edge hydroponic solutions designed for sustainable
          and efficient urban farming.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300"
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              {product.title}
            </h3>
            <p className="text-gray-600 mt-2">{product.description}</p>


          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
