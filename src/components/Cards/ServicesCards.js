import React from 'react';
import CardItem from './CardItem';

import "../../styles/Cards.css";

function ServiceCards() {
  return (
    <div className="cards">
        <h1>My current services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="cards__items">
                
                <CardItem
                src="images/jaxson-walk.jpeg"
                text="Dog Walking/Hiking"
                label='adventure'
                path="/services"
                />
                <CardItem
                src="images/mccoy.jpeg"
                text="Dog House Sitting"
                label='adventure'
                path="/services"
                />
                </ul>
                <ul className="cards__items">
                <CardItem
                src="images/taxi.jpg"
                text="Vet Taxi Service"
                label='adventure'
                path="/services"
                />
                <CardItem
                src="images/piper.jpeg"
                text="Dog Feed and Potty Break"
                label='adventure'
                path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceCards
