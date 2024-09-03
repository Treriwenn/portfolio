import React from "react";
import FicheProjectDisplay from "../../components/ficheProject/FicheProjectDisplay";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FichLogment = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheProjectDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default FichLogment;
