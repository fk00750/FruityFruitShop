import React, { useEffect, useState } from "react";
import HeroSection from "../HomePageComponents/HeroSection";
import StatSection from "../HomePageComponents/StatSection";
import FeaturePrompt from "../HomePageComponents/FeaturePrompt";
import HomeProducts from "../HomePageComponents/HomeProducts";
import Newsletter from "../HomePageComponents/Newsletter";
import ProductsGallery from "../HomePageComponents/ProductsGallery";
import Footer from "../HomePageComponents/Footer";

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
      <Footer />
    </div>
  );
}

export default Home;
