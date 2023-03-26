import React from "react";
import "../../styles/DropInService.css";
function DropIn() {
  return (
    <div className="dropIn-container-outer-div">
      <h2 className="dropIn-header">Drop In Visits</h2>
      <div className="dropIn-container-inner-div">
        <ul className="dropIn-container-ul">
          <li className="dropIn-li">
            Our dog drop-in and feed visits provide a convenient and reliable
            solution for busy pet owners who need help taking care of their
            furry friend while they're away from home.
          </li>
          <li className="dropIn-li">
            Our team of experienced and trusted caregivers will visit your dog
            at home, providing them with fresh food, water, and any necessary
            medication, while also offering a brief playtime or potty break to
            keep them happy and comfortable.
          </li>
          <li className="dropIn-li">
            We offer flexible scheduling options to accommodate your busy
            lifestyle and ensure your dog receives the care and attention they
            need on a regular basis, even when you can't be there yourself.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropIn;
