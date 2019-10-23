import React, { useContext } from "react"
import { Navbar } from "react-bootstrap"
import Logo from "../images/logos/logo-horizontal.png"
import { Link } from "gatsby"
import { StoreContext } from "../context/StoreContext"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa"

export default () => {
  const { isCartOpen, addProductToCart } = useContext(StoreContext)
  return (
    <Navbar collapseOnSelect expand="lg" className="flex pt-4">
      <Link to="/">
        <img src={Logo} alt="Mini Pop Kids logo" id="nav-logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="flex-col w-full">
          <div id="nav-socials">
            <ul className="flex">
              <li className="mx-2">
                <FaFacebook />
              </li>
              <li className="mx-2">
                <FaInstagram />
              </li>
              <li className="mx-2">
                <FaYoutube />
              </li>
              <li className="mx-2">
                <FaSpotify />
              </li>
              <li className="mx-2">
                <FaAmazon />
              </li>
              <li className="mx-2">
                <FaApple />
              </li>
            </ul>
          </div>
          <div id="nav-links">
            <ul id="nav-links-ul" className="flex text-xl">
              <li className="lg:mx-2">
                <Link to="/home" className="pink">
                  Home
                </Link>
              </li>
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
                <Link to="/videos" className="pink">
                  Videos
                </Link>
              </li>
              <li className="lg:mx-2">
                <Link to="/meet-the-mpk" className="pink">
                  Meet The Kids
                </Link>
              </li>
              <li className="lg:mx-2">
                <a
                  href="https://minipopkids.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink"
                >
                  Shop
                </a>
              </li>
              <li className="ml-2">
                <Link to="/contact" className="pink">
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
