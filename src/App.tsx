// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashbord from "./components/Dashbord";

import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Price from "./components/Price";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Home />
        <About />
        <CTA />
        <Price />
      </main>
      <Footer />
    </div>
  );
};

export default App;

