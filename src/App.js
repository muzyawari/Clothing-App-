import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Mens from "./pages/Mens";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
