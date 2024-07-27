import React, { useEffect } from 'react';
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { analytics } from "./firebase";
import ReactGA from 'react-ga';

ReactGA.initialize('6238026937'); // Replace with your Tracking ID

ReactGA.pageview(window.location.pathname + window.location.search);

const usePageViews = () => {
  let location = useLocation();
  useEffect(() => {
    window.gtag('config', 'G-QEXV0B4QH0', {
      page_path: location.pathname + location.search,
    });
  }, [location]);
};

function App() {
  usePageViews();
  useEffect(() => {
    // Log an event when the app loads
    analytics.logEvent('page_view', { page_title: 'Home Page' });
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
    </div>
  );
}

export default App;
