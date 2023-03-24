import React from "react";
// import "../styles/Services.css";

// import "../../App.css";
// import Overnight from "./Overnight";
// import Walks from "./Walks";
// import Sitting from "./Sitting";
// import VetService from "./VetServices";
import ServiceCards from "./ServicesCards";

function ServicesComponent() {
  return (
    <section>
      <h2>Services</h2>
      <div>
        <ServiceCards />
      </div>

      {/* <div id="services-div">
        <h2 className="services-header">Dog walks/ hikes</h2>
      </div> */}
    </section>
  );
}

export default ServicesComponent;
