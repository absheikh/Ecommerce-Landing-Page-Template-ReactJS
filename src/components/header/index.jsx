import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import bag from "../../assets/images/bag.png";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav className="wrapper">
        <Link className="logo" to="">
          Bayside fine jewelry
        </Link>
        <ul className={isOpen ? "navbar activate" : "navbar"}>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <img src={bag} alt="bag" />
            </Link>
          </li>
        </ul>
        <div onClick={toggle} className="mobile">
          <div className="toggle"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
