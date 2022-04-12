import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="footer-subscription-div">
          <p className="footer-subscription-heading">
            Join us, Enter your Email to recieve <thead></thead> latest Updates
          </p>
          <p className="footer-subscription-text">
            You can Unsubscribe at any time
          </p>
        </div>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeHolder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <Link className="footer-link-item" to="/">
          Home
        </Link>
        <Link className="footer-link-item" to="/">
          About
        </Link>
        <Link className="footer-link-item" to="/">
          FAQ
        </Link>
        <Link className="footer-link-item" to="/">
          Privacy
        </Link>
        <Link className="footer-link-item" to="/">
          Terms
        </Link>
        <Link className="footer-link-item" to="/">
          Support
        </Link>
        <Link className="footer-link-item" to="/">
          Login
        </Link>
        <Link className="footer-link-item" to="/">
          SignUP
        </Link>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              MYLIST <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">MYLIST * 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link discord"
              to="/"
              target="_blank"
              aria-label="Discord"
            >
              <i className="fab fa-discord" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
