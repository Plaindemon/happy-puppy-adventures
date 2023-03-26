import React from "react";
import "../../styles/Services.css";

// import "../../App.css";
// import Overnight from "./Overnight";
// import Walks from "./Walks";
// import Sitting from "./Sitting";
// import VetService from "./VetServices";
import ServiceCards from "./ServicesCards";

function ServicesComponent() {
  return (
      <div className="services-div">
        <h2>Services</h2>
        <ServiceCards />
      </div>

  );
}

export default ServicesComponent;
