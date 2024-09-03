import React from "react";

import Footer from "../../components/footer/Footer";
// import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
// import Carrousel from "../../components/carrousel/Carrousel";
import ContactForm from "../../components/contactForm/ContactForm";



const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
       <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
