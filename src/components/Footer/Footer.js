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
                <Link to="/sign-up">Sign up</Link>
                <Link to ="/">About us</Link>
                <Link to ="/">Reviews</Link>
                <Link to ="/">Website creator</Link>
                <Link to='/'>Terms of Service</Link>

            </div>
            <div className='footer-link-items'>
                <h2>Contact us</h2>
                <Link to="/sign-up">Sign up</Link>
                <Link to ="/">About us</Link>
                <Link to ="/">Reviews</Link>
                <Link to ="/">Website creator</Link>
                <Link to='/'>Terms of Service</Link>

            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About us</h2>
                <Link to="/sign-up">Sign up</Link>
                <Link to ="/">About us</Link>
                <Link to ="/">Reviews</Link>
                <Link to ="/">Website creator</Link>
                <Link to='/'>Terms of Service</Link>

            </div>
            <div className='footer-link-items'>
                <h2>Contact us</h2>
                <Link to="/sign-up">Sign up</Link>
                <Link to ="/">About us</Link>
                <Link to ="/">Reviews</Link>
                <Link to ="/">Website creator</Link>
                <Link to='/'>Terms of Service</Link>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
