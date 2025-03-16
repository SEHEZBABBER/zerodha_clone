import Awards from "./Awards";
import Hero from "./Hero";
import Education from "./Education";
import Footer from "./Footer";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Signup from "../signup/Signup";
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <Signup />
      <Footer />
    </>
  );
}

export default HomePage;
