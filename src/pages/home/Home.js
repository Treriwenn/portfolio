import React from "react";

import Footer from "../../components/footer/Footer";
// import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Carrousel from "../../components/carrousel/Carrousel";
import Competence from "../../components/competence/Competence";
import Presentation from "../../components/presentation/Presentation";
import Projet from "../../components/projet/Projet"



const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Carrousel />
        <div className="home__section home__section__1">
          <Competence />
          <Presentation />
        </div>
        <div>
          <div>
            <h2 class="title-center">Projet mis en avant : </h2>
            <Projet id="4" />
            <Projet id="5"/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
