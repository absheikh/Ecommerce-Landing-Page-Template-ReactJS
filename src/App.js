import React from "react";

import "./App.css";
import Header from "./components/header";
import heroImage from "./assets/images/hero.png";
import Shop1 from "./assets/images/Shop1.png";
import Shop2 from "./assets/images/Shop2.png";
import Shop3 from "./assets/images/Shop3.png";
import Shop4 from "./assets/images/Shop4.png";
import Shop5 from "./assets/images/Shop5.png";
import gallery1 from "./assets/images/gallery1.png";
import gallery2 from "./assets/images/gallery2.png";
import gallery3 from "./assets/images/gallery3.png";
import service1 from "./assets/images/service1.png";
import service2 from "./assets/images/service2.png";
import service3 from "./assets/images/service3.png";
import { Link } from "react-router-dom";
import { Qoute } from "./assets/svg";
import Footer from "./components/footer";
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="hero-container">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="wrapper container shops-container">
        <h4 className="container-title">Shop by Jewelry Type</h4>
        <div className="shop-container">
          <div className="shop">
            <div className="shop-image">
              <img src={Shop1} alt="Shop1" />
            </div>
            <h4 className="shop-title">engagement rings</h4>
          </div>

          <div className="shop">
            <div className="shop-image">
              <img src={Shop2} alt="Shop2" />
            </div>
            <h4 className="shop-title">Earrings</h4>
          </div>

          <div className="shop">
            <div className="shop-image">
              <img src={Shop3} alt="Shop3" />
            </div>
            <h4 className="shop-title">necklaces</h4>
          </div>

          <div className="shop">
            <div className="shop-image">
              <img src={Shop4} alt="Shop4" />
            </div>
            <h4 className="shop-title">bracelets</h4>
          </div>

          <div className="shop">
            <div className="shop-image">
              <img src={Shop5} alt="Shop5" />
            </div>
            <h4 className="shop-title">all Rings</h4>
          </div>
        </div>
      </div>
      <div className="container hand-crafted">
        <div className="wrapper">
          <div className="crafted-content">
            <h4 className="crafted-title">
              Hand Crafted <br />
              fine pieces.
            </h4>
            <p className="description">
              We also firmly believed that our customers deserved more choices,
              straightforward information and legendary service.
            </p>

            <Link to="/shop" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="container wrapper gallery-container">
        <h4 className="container-title">gallery</h4>
        <div className="images">
          <img src={gallery1} alt="gallery1" />
          <img src={gallery2} alt="gallery2" />
          <img src={gallery3} alt="gallery3" />
        </div>
        <Link to="/gallery" className="primary-btn btn">
          View Gallery
        </Link>
      </div>
      <div className="container wrapper reviews-container">
        <h4 className="container-title">Customer Review</h4>
        <div className="reviews">
          <div className="review">
            <Qoute />
            <p>
              Great variety of cuts and amazing customer service. Helped to find
              the perfect ring and helped me to personalize it a little more.
            </p>
            <span>- Nico Jones</span>
          </div>
          <div className="review">
            <Qoute />
            <p>
              What an amazing shopping experience! I tried other jewelers and
              didn't find anything I liked. Thank you so much.
            </p>
            <span>- Tracy Willis</span>
          </div>
          <div className="review">
            <Qoute />
            <p>
              Great quality, and showed they can work through a problem and
              maintain excellent customer service!!
            </p>
            <span>- Susana Santos</span>
          </div>
        </div>
      </div>
      <div className="wrapper container services-container">
        <h4 className="container-title">Our Services</h4>
        <div className="service-container">
          <div className="service">
            <div className="service-image">
              <img src={service1} alt="service1" />
            </div>
            <h4 className="service-title">Jewelry Repair</h4>
          </div>

          <div className="service">
            <div className="service-image">
              <img src={service2} alt="service2" />
            </div>
            <h4 className="service-title">Ring Sizing</h4>
          </div>

          <div className="service">
            <div className="service-image">
              <img src={service3} alt="service3" />
            </div>
            <h4 className="service-title">Jewelry Polishing</h4>
          </div>
        </div>
        <Link to="/gallery" className="primary-btn btn">
          Learn More
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
