import { React, useContext } from "react";
import { PortfolioProvider } from "../context/PortfolioContext";
import { PortfolioContext } from "../context/PortfolioContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  const { portfolio, loading } = useContext(PortfolioContext);

  if (loading) {
    return <div>Loading portfolio...</div>;
  }

  if (!portfolio) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">User does not exist ❌</h1>
      </div>
    );
  }

  return (
    // <PortfolioProvider>
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    // </PortfolioProvider>
  );
};

export default Home;
