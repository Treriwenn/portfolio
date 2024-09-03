import React from "react";
import "./styles/app.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact"
import FichProject from "./pages/project/FichProject";
import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<FichProject />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
