import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // ✅ Import ScrollToTop

const RootLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <ScrollToTop /> {/* ✅ Now this runs globally for all routes */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
