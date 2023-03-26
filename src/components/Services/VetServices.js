import React from "react";
import "../../styles/TaxiService.css";

function VetTaxi() {
  return (
    <div className="taxi-container-outer-div">
      <h2 className="taxi-header">Pet Taxi</h2>
      <div className="taxi-container-inner-div">
        <ul className="taxi-container-ul">
          <li className="taxi-li">
            Our dog veterinarian taxi service provides a safe and reliable
            transportation solution for pet owners who need help getting their
            furry friend to and from their veterinary appointments.
          </li>
          <li className="taxi-li">
            Our team of experienced and compassionate drivers will transport
            your dog to and from the vet's office, ensuring they arrive on time
            and in a calm and comfortable state of mind.
          </li>
          <li className="taxi-li">
            We offer flexible scheduling options to accommodate your pet's
            specific needs and ensure they receive the care and attention they
            require, even if you are unable to transport them yourself.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VetTaxi;
