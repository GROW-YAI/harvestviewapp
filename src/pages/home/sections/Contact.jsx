import {
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-green-500 uppercase">
            Get in Touch
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            <span className="text-green-600">Contact</span> Us
          </h2>
          <p className="text-gray-600 mt-4">
            Have questions or want to learn more about our NFT Hydroponic
            Systems? Reach out to us!
          </p>
        </div>

        {/* Contact & Map */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            {/* Address */}
            <div className="text-lg text-gray-700">
              📍 Nkwabeng Mayfair, Sunyani, Ghana
            </div>

            {/* Email */}
            <a
              href="mailto:harvestviewgh@gmail.com"
              className="block text-lg text-green-600 hover:underline"
            >
              📧 harvestviewgh@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+233534775338"
              className="block text-lg text-green-600 hover:underline"
            >
              📞 +233 534 775 338
            </a>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/harvestviewgh?igsh=ZTZpbjh2c2tjZzl4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-600 hover:text-green-800 transition"
              >
                <FaInstagram />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@harvestviewgh?_t=ZM-8uUJffbaeIw&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-600 hover:text-green-800 transition"
              >
                <FaTiktok />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/harvestviewgh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-600 hover:text-green-800 transition"
              >
                <FaLinkedinIn />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/12FMBqB7ZEA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-600 hover:text-green-800 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="md:w-1/2 w-full h-64">
            <MapContainer
              center={[7.33, -2.33]} // Approximate coordinates for Nkwabeng Mayfair, Sunyani
              zoom={13}
              className="w-full h-full rounded-lg shadow-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[7.33, -2.33]}
                icon={L.icon({
                  iconUrl: markerIconPng,
                  shadowUrl: markerShadowPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })}
              >
                <Popup>📍 Nkwabeng Mayfair, Sunyani, Ghana</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
