import React from "react";
import "../styles/Home.css";
import "../App.css";

import BannerComponent from "../components/Banner";
import Cards from "../components/Cards/Cards";
import ServiceCards from "../components/Services/ServicesCards";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    // <section className="home">
    <div id="home-div">
      <BannerComponent />
      {/* <Footer /> */}
      {/* <Cards /> */}
      {/* <ServiceCards /> */}
      {/* <h2 className="home-header">Welcome! Take a look around</h2> */}
    </div>
    // </section>
  );
}

export default Home;
