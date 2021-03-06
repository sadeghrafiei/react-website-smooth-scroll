import React, { useState } from "react";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/infoSection";
import {
<<<<<<< HEAD
  homeObjOne,
=======
  homeObjFive,
  homeObjFour,
  homeObjOne,
  homeObjSix,
>>>>>>> be469c96318715328a33a6e18632e35a1869ff4d
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import Services from "../components/Services";
<<<<<<< HEAD
import Footer from "../components/Footer";
=======
>>>>>>> be469c96318715328a33a6e18632e35a1869ff4d

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> be469c96318715328a33a6e18632e35a1869ff4d
    </>
  );
};

export default Home;
