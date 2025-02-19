import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-green-900 text-white py-4 px-8 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-green-400">VERTI</span>HARVEST
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a className="hover:text-green-400 transition" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-green-400 transition" href="#product">
                Showcase
              </a>
            </li>
            <li>
              <a className="hover:text-green-400 transition" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-green-800 text-white mt-4 py-4 px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  className="hover:text-green-400 transition"
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-green-400 transition"
                  href="#product"
                  onClick={() => setIsOpen(false)}
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  className="hover:text-green-400 transition"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;
