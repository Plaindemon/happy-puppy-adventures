import React from "react";
import PhotoCardItem from "./PhotoCardItems";

import "../../styles/PhotoCardItem.css";

function PhotoCards() {
  return (
    <div className="cards">
      {/* <h1>My current services</h1> */}
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <PhotoCardItem
              src="images/jaxson-happy.jpeg"
              text="Dog Walking"
              label="Jaxson"
            //   path="/walks"
            />
            <PhotoCardItem
              src="images/jaxson-water.jpeg"
              text="Dog Hiking"
              label="Jaxson"
            //   path="/hikes"
            />
            <PhotoCardItem
              src="images/Beasly.jpeg"
              text="Dog Hiking"
              label="Beesly"
            //   path="/hikes"
            />
          </ul>

          <ul className="cards-items">
            <PhotoCardItem
              src="images/mccoy.jpeg"
              text="House Sitting"
              label="McCoy"
            //   path="/sitting"
            />
            <PhotoCardItem
              src="images/charlie-fall.jpeg"
              text="Drop-In Visits"
              label="Charlie"
            //   path="/drop-in"
            />
            <PhotoCardItem
              src="images/finn-sunny.jpeg"
              text="Dog Hiking"
              label="Finn"
            //   path="/hikes"
            />
          </ul>
          <ul className="cards-items">
            <PhotoCardItem
              src="images/jaxson-sunflower.jpeg"
              text="Vet Taxi Service"
              label="Jaxson"
            //   path="/vet-taxi"
            />
            <PhotoCardItem
              src="images/piper.jpeg"
              text="Doggy Daycare"
              label="Piper"
            //   path="/daycare"
            />
            <PhotoCardItem
              src="images/maverick.jpeg"
              text="Dog Hiking"
              label="Maverick"
            //   path="/hikes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoCards;
