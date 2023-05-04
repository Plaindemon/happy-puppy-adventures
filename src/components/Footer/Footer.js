import React from "react";
import { Button } from "../Button.js";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the newsletter</p>
        <p className="footer-subscription-text"></p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn-outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About us</h2>
                
                <a href="https://personal-portfolio-57sd.onrender.com">Portfolio - Ben</a>
                {/* <Link to ="/">Locations</Link> */}
                {/* <Link to ="/">Reviews</Link> */}
                
                <a href="https://github.com/Plaindemon">Website Creator - Github</a>
                {/* <Link to='/'>Terms of Service</Link> */}

            </div>
            <div className='footer-link-items'>
                <h2>Client Paperwork</h2>
                <Link to="/paperwork">About your pets</Link>
                <Link to ="/paperwork">Vet & Emergency Contact</Link>
                {/* <Link to ="/">Emergency Contact</Link> */}
                {/* <Link to ="/">Pet Insurance</Link> */}
                <Link to='/paperwork'>House Instructions and Info</Link>

            </div>
            <div className='footer-link-items'>
                <h2>Contact us</h2>
                <Link to="/sign-up">Sign up</Link>
                <Link to ="/new-client">Contact Me</Link>
                {/* <Link to ="/">Request Dates</Link> */}
                {/* <Link to ="/">Website Creation Services</Link> */}
                {/* <Link to='/'></Link> */}

            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Social</h2>
                <a href="https://www.instagram.com/happy.puppyadventures/">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100089561836580">Facebook</a>
                {/* <Link to ="/">Tiktok</Link> */}
                {/* <Link to ="/">LinkedIn</Link> */}
                {/* <Link to='/'>Rover</Link> */}
                {/* <Link to='/'>Pinterest</Link> */}


            </div>
            {/* <div className='footer-link-items'>
                <h2>Legal</h2>
                <Link to="/sign-up">Terms and Conditions</Link>
                <Link to ="/">Copyright</Link>
                <Link to ="/">Privacy Statement</Link>
                <Link to ="/">Website creator</Link>
                <Link to='/'>Terms of Service</Link>

            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
