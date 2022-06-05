import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Mens from "./pages/category/Mens";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
