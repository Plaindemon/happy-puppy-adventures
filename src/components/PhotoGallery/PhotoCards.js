import React from "react";
import PhotoCardItem from "./PhotoCardItems";

import "../../styles/PhotoCardItem.css";

function PhotoCards() {
  return (
    <div className="cards">
      {/* <h1>My current services</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <PhotoCardItem
              src="images/jaxson-happy.jpeg"
              text="Dog Walking"
              label="Adventure"
            //   path="/walks"
            />
            <PhotoCardItem
              src="images/jaxson-water.jpeg"
              text="Dog Hiking"
              label="Adventure"
            //   path="/hikes"
            />
            <PhotoCardItem
              src="images/Beasly.jpeg"
              text="Dog Hiking"
              label="Adventure"
            //   path="/hikes"
            />
          </ul>

          <ul className="cards__items">
            <PhotoCardItem
              src="images/mccoy.jpeg"
              text="House Sitting"
              label="Adventure"
            //   path="/sitting"
            />
            <PhotoCardItem
              src="images/charlie-fall.jpeg"
              text="Drop-In Visits"
              label="Adventure"
            //   path="/drop-in"
            />
            <PhotoCardItem
              src="images/finn-sunny.jpeg"
              text="Dog Hiking"
              label="Adventure"
            //   path="/hikes"
            />
          </ul>
          <ul className="cards__items">
            <PhotoCardItem
              src="images/jaxson-sunflower.jpeg"
              text="Vet Taxi Service"
              label="Adventure"
            //   path="/vet-taxi"
            />
            <PhotoCardItem
              src="images/piper.jpeg"
              text="Doggy Daycare"
              label="Adventure"
            //   path="/daycare"
            />
            <PhotoCardItem
              src="images/maverick.jpeg"
              text="Dog Hiking"
              label="Adventure"
            //   path="/hikes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoCards;
