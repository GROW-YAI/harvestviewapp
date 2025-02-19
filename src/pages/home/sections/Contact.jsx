import { FaXTwitter, FaInstagram } from "react-icons/fa6"; 
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
              📍 Sunyani East, Bono Region, Ghana
            </div>

            {/* Email */}
            <a
              href="mailto:allgreensglobal@gmail.com"
              className="block text-lg text-green-600 hover:underline"
            >
              📧 allgreensglobal@gmail.com
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
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-red-600 hover:text-red-800 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-red-600 hover:text-red-800 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="md:w-1/2 w-full h-64">
            <MapContainer
              center={[7.34, -2.345]}
              zoom={13}
              className="w-full h-full rounded-lg shadow-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[7.34, -2.345]}
                icon={L.icon({
                  iconUrl: markerIconPng,
                  shadowUrl: markerShadowPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  
                })}
              >
                <Popup>📍 Sunyani East, Bono Region, Ghana</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
