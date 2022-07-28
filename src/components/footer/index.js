import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import footer from "../../assets/images/footer.png";
import { Facebook, Instagram, Twitter, WhatsApp } from "../../assets/svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="in-touch">
          <img src={footer} alt="footer" />
          <div className="content">
            <p className="title">Stay in touch?</p>
            <p className="desc">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <Link to="/" className="primary-btn btn">
              Subscribe
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <div className="links">
            <h6>Product</h6>
            <ul>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Terms of Service</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h6>Resources</h6>
            <ul>
              <li>
                <Link to="">Documentation</Link>
              </li>
              <li>
                <Link to="">Case Studies</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h6>Company</h6>
            <ul>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="copyright-content">
        <p>&copy; Blue Diamond Jewelry™ 2021</p>
        <div className="social-handles">
          <Facebook /> <Instagram /> <Twitter /> <WhatsApp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
