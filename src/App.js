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
import Login from "./components/Register/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/Register/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateProfile from "./components/Dashboard/UpdateProfile";

function App() {
  
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar />
          {/* <BannerComponent /> */}

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
            
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
            

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
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
