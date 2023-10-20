import React from "react";
import NavBar from "../components/home-comp/NavBar";
import Hero from "../components/home-comp/Hero";
import ProudPro from "../components/home-comp/ProudPro";
import { Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProudPro />
    </>
  );
};

export default HomePage;
