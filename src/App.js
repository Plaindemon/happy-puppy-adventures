import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services";
import NewClient from "./pages/NewClient";
import SignUp from "./pages/SignUp";

import BannerComponent from "./components/Banner";

import ServicesComponent from "./components/Services/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <BannerComponent /> */}

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/new-client" element={<NewClient />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Home />
        {/* <ServicesComponent /> */}
        {/* <Services /> */}
        {/* <NewClient /> */}
      </Router>
    </div>
  );
}

export default App;
