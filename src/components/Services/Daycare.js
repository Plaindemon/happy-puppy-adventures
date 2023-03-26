import React from "react";
import "../../styles/DaycareService.css"

function Daycare() {
  return (
    <div className="sitting-container-outer-div">
      <h2 className="sitting-header">Dog Daytime Pet Sitting</h2>
      <div className="sitting-container-inner-div">
        <ul className="sitting-container-ul">
          <li className="sitting-li">
            Our dog day sitting service provides a safe and stimulating
            environment for your furry friend during the daytime, ensuring they
            receive plenty of exercise, socialization, and attention while
            you're at work or running errands.
          </li>
          <li className="sitting-li">
            Our team of experienced and caring sitters are passionate about
            animals and will treat your pet like their own, providing a fun and
            engaging experience that will keep them happy and healthy throughout
            the day.
          </li>
          <li className="sitting-li">
            We offer a range of activities and playtime options to suit your
            dog's personality and energy level, from supervised group play to
            one-on-one snuggles and belly rubs, so you can be sure your dog is
            getting the best possible care while you're away.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Daycare;
