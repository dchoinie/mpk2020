import React from "react"
import { Navbar } from "react-bootstrap"
import Logo from "../images/logos/logo-horizontal.png"
import { Link } from "gatsby"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa"

export default () => {
  return (
    <Navbar variant="light" collapseOnSelect expand="lg" className="flex">
      <Link to="/">
        <img src={Logo} alt="Mini Pop Kids logo" id="nav-logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="flex-col w-full">
          <div id="nav-socials">
            <ul className="flex">
              <li className="lg:mx-2">
                <FaFacebook />
              </li>
              <li className="lg:mx-2">
                <FaTwitter />
              </li>
              <li className="lg:mx-2">
                <FaInstagram />
              </li>
              <li className="lg:mx-2">
                <FaYoutube />
              </li>
              <li className="lg:mx-2">
                <FaSpotify />
              </li>
              <li className="lg:mx-2">
                <FaApple />
              </li>
              <li className="ml-2">
                <FaAmazon />
              </li>
            </ul>
          </div>
          <div id="nav-links">
            <ul id="nav-links-ul" className="flex text-xl">
              <li className="lg:mx-2">
                <Link to="/tour" className="pink">
                  Tour
                </Link>
              </li>
              <li className="lg:mx-2">
                <Link to="/music" className="pink">
                  Music
                </Link>
              </li>
              <li className="lg:mx-2">
                <Link to="/" className="pink">
                  Videos
                </Link>
              </li>
              <li className="lg:mx-2">
                <Link to="/" className="pink">
                  Meet The Kids
                </Link>
              </li>
              <li className="lg:mx-2">
                <Link to="/" className="pink">
                  Shop
                </Link>
              </li>
              <li className="ml-2">
                <Link to="/" className="pink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
