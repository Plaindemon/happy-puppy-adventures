import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services";
import NewClient from "./pages/NewClient";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import Walks from "./components/Services/Walks";
import Hikes from "./components/Services/Hikes";

import Sitting from "./components/Services/Sitting"
import VetTaxi from "./components/Services/VetServices";
import DropIn from "./components/Services/DropIn";
import BannerComponent from "./components/Banner";
import ClientPaperwork from "./pages/ClientPaperwork";

import Gallery from "./components/PhotoGallery";

import ServicesComponent from "./components/Services/index";
import Daycare from "./components/Services/Daycare";


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
          <Route path="/walks" element={<Walks />} />
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/sitting" element={<Sitting />} />
          <Route path="/vet-taxi" element={<VetTaxi />} />
          <Route path="/drop-in" element={<DropIn />} />
          <Route path="/daycare" element={<Daycare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/paperwork" element={<ClientPaperwork />} />
        </Routes>
        {/* <Home /> */}
        {/* <ServicesComponent /> */}
        {/* <Services /> */}
        {/* <NewClient /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
