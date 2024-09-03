import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carrousel from "../../components/carrousel/Carrousel";
import Gallery from "../../components/gallery/Gallery"
const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Carrousel />
        <Gallery />
      </main>


      <Footer />
    </div>
  );
};

export default About;
