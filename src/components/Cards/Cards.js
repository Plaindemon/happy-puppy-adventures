import React from 'react';
import CardItem from './CardItem';

import "../../styles/Cards.css";

function Cards() {
  return (
    <div className="cards">
        <h1>Check out my puppy photo gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className="cards__items">
                <CardItem
                src="images/jaxson-water.jpeg"
                text="Puppy on a hike"
                label='adventure'
                path="/services"
                />
                <CardItem
                src="images/charlie-fall.jpeg"
                text="Puppy on a hike"
                label='adventure'
                path="/services"
                />
                </ul>
                <ul className="cards__items">
                <CardItem
                src="images/finn-cute.jpeg"
                text="Puppy on a hike"
                label='adventure'
                path="/services"
                />
                <CardItem
                src="images/lexi.jpeg"
                text="Puppy on a hike"
                label='adventure'
                path="/services"
                />
                <CardItem
                src="images/lexi.jpeg"
                text="Puppy on a hike"
                label='adventure'
                path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
