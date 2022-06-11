import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";

import SignIn from "./pages/sign-up/SignIn";
import SignUp from "./pages/sign-up/SignUp";

import Category from "./pages/categories/Category";
import Cart from "./pages/cart/Cart";

import { useParams } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
