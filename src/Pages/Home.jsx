import React, { useEffect, useState } from "react";
import HeroSection from "../PageComponents/HeroSection";
import Categories from "../Components/Categories";
import StatSection from "../PageComponents/StatSection";
import FeaturePrompt from "../PageComponents/FeaturePrompt";
import HomeProducts from "../PageComponents/HomeProducts";
import Newsletter from "../PageComponents/Newsletter";
import ProductsGallery from "../PageComponents/ProductsGallery";

function Home() {
  const bgImg = {
    backgroundImage: `url(/images/arrangefruits.png)`,
    paddingLeft: "0.5rem",
    paddingTop: "4.5rem",
    paddingBottom: "4.5rem",
    textAlign: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const buttonStyle = {
    fontSize: "15px",
    color: "#fff",
    borderColor: "#18ab29",
    fontWeight: "bold",
    borderTopRightRadius: "35px",
    borderBottomLeftRadius: "35px",
    textShadow: "1px 1px 0px #2f6627",
  };

  const numberStyle = {
    borderRadius: "50%",
    height: "35px",
    width: "35px",
  };

  return (
    <div className="hero py-16">
      <HeroSection />
      <StatSection />
      <FeaturePrompt />
      <ProductsGallery />
      <HomeProducts />
      <Newsletter />
      <footer className="p-4 bg-white sm:p-6 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-center">
            <img
              src="/images/freshfruit_logo.png"
              alt=""
              className="h-14 sm:h-24  -mr-2.5"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-green-600 font-mono">
              Fruity
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-600">
                <li className="mb-4">Fruity</li>
                <li className="mb-4">Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
              <ul className="text-gray-600">
                <li className="mb-4">Github</li>
                <li className="mb-4">Discord</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">legal</h2>
              <ul className="text-gray-600">
                <li className="mb-4">Privacy Policy</li>
                <li className="mb-4">Terms &amp; Conditons CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;