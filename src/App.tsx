import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ServiceDetailPage from "./components/ServiceDetailPage";
import { servicePages } from "./data/servicePages";

const serviceRoutes = {
  "/financial-advisory": servicePages.financial,
};

function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

export default function App() {
  const servicePage =
    serviceRoutes[window.location.pathname as keyof typeof serviceRoutes];

  return (
    <main className="site">
      <Header />
      {servicePage ? <ServiceDetailPage page={servicePage} /> : <HomePage />}
      <Footer />
    </main>
  );
}
