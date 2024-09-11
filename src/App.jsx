import { useEffect } from 'react';
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"



function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Clients />
      <Contact />
      <Footer />
      <Analytics/>
    </div>
  );
}

export default App;
