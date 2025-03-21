import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingpage/Home/HomePage";
import Signup from "./landingpage/signup/Signup";
import Login from "./landingpage/signup/Login";
import About from "./landingpage/about/About";
import PricingPage from "./landingpage/pricing/PricingPage";
import ProductPage from "./landingpage/products/ProductPage";
import SupportPage from "./landingpage/support/SupportPage";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/footer";
import NotFound from "./landingpage/NotFound";
import "./index.css";
import { UserProvider, useUserContext } from "./UserContext";
import axios from "axios";
import { useEffect } from "react";

// ✅ Fetch user data on refresh and set the user state
function AppContent() {
  const { setuser_info } = useUserContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:3002/userdata", {
          withCredentials: true, // ✅ Ensure cookies/session are included
        });

        if (res.status === 200 && res.data) {
          setuser_info(res.data); // ✅ Set user data if authenticated
        }
      } catch (error) {
        console.log("User not logged in or session expired.");
      }
    };

    fetchUserData(); // ✅ Call function to get user data
  }, [setuser_info]);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

// ✅ Wrap AppContent in UserProvider and BrowserRouter
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
