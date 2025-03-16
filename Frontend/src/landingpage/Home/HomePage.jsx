import Awards from "./Awards";
import Hero from "./Hero";
import Education from "./Education";
import Footer from "./Footer";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Education />
      <Footer />
      <Pricing />
      <Stats />
    </>
  );
}

export default HomePage;
