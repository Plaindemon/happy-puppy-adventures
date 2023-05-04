import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services";
import NewClient from "./pages/NewClient";

import Footer from "./components/Footer/Footer";
import Walks from "./components/Services/Walks";
import Hikes from "./components/Services/Hikes";

import Sitting from "./components/Services/Sitting";
import VetTaxi from "./components/Services/VetServices";
import DropIn from "./components/Services/DropIn";

import ClientPaperwork from "./pages/ClientPaperwork";

import Gallery from "./components/PhotoGallery";

import Daycare from "./components/Services/Daycare";

import Registration from "./components/Register/index";
import Signup from "./components/Register/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          {/* <BannerComponent /> */}

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/new-client" element={<NewClient />} />

            <Route path="/walks" element={<Walks />} />
            <Route path="/hikes" element={<Hikes />} />
            <Route path="/sitting" element={<Sitting />} />
            <Route path="/vet-taxi" element={<VetTaxi />} />
            <Route path="/drop-in" element={<DropIn />} />
            <Route path="/daycare" element={<Daycare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Registration />} />

            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/paperwork" element={<ClientPaperwork />} />
          </Routes>
          {/* <Signup /> */}
          {/* <Home /> */}
          {/* <ServicesComponent /> */}
          {/* <Services /> */}
          {/* <NewClient /> */}
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
