import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-2 flex justify-center items-center text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p>
          © {new Date().getFullYear()} Harvestview GH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
