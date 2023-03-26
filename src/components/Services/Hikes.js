import React from "react";
import "../../styles/HikesService.css"

function Hikes() {
  return (
    <div className="hikes-container-outer-div">
      
        <h2 className="hikes-header">Dog Hiking Service</h2>
        <div className="hikes-container-inner-div">
          <ul className="hikes-container-ul">
            <li className="hikes-li">
              Our dog hiking service takes your furry friend on exciting outdoor
              adventures in beautiful natural settings, giving them a chance to
              explore and exercise in a way that regular walks just can't match.
            </li>
            <li className="hikes-li">
              Our team of experienced and knowledgeable dog hikers are
              well-equipped to handle any terrain or weather conditions,
              ensuring your dog's safety and enjoyment throughout the hike.
            </li>
            <li className="hikes-li">
              We offer a range of hiking options to suit different fitness
              levels and interests, from leisurely strolls to more challenging
              hikes, so you can find the perfect adventure for your dog.
            </li>
          </ul>
        </div>
      
    </div>
  );
}

export default Hikes;
