import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";

import Shop from "./pages/shop/Shop";
import SignIn from "./pages/sign-up/SignIn";
import SignUp from "./pages/sign-up/SignUp";

import ProductCards from "./pages/products/ProductCards";

import { useParams } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
