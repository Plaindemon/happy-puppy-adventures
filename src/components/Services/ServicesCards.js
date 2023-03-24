import React from "react";
import CardItem from "../Cards/CardItem";

import "../../styles/Cards.css";

function ServiceCards() {
  return (
    <div className="cards">
      {/* <h1>My current services</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/jaxson-walk.jpeg"
              text="Dog Walking"
              label="Adventure"
              path="/walks"
            />
            <CardItem
              src="images/jaxson-water.jpeg"
              text="Dog Hiking"
              label="Adventure"
              path="/hikes"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/mccoy.jpeg"
              text="House Sitting"
              label="Adventure"
              path="/sitting"
            />
            <CardItem
              src="images/charlie-fall.jpeg"
              text="Drop-In Visits"
              label="Adventure"
              path="/drop-in"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/taxi.jpg"
              text="Vet Taxi Service"
              label="Adventure"
              path="/vet-taxi"
            />
            <CardItem
              src="images/piper.jpeg"
              text="Doggy Daycare"
              label="Adventure"
              path="/daycare"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
