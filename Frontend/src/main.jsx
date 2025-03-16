import { createRoot } from "react-dom/client";
import HomePage from "./landingpage/Home/HomePage";
import Signup from "./landingpage/signup/Signup";
import About from "./landingpage/about/About";
import PricingPage from "./landingpage/pricing/PricingPage";
import ProductPage from "./landingpage/products/ProductPage";
import SupportPage from "./landingpage/support/SupportPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/footer";
import NotFound from "./landingpage/NotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
  <div style={{ paddingTop: "80px" }}/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Products" element={<ProductPage/>}/>
      <Route path="/Pricing" element={<PricingPage/>}/>
      <Route path="/Support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
