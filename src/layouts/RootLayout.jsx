import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import BoafoWidgetInitializer from "../../app/components/BoafoWidgetInitializer";

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <BoafoWidgetInitializer />
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;