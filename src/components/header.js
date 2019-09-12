import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../images/logo_horizontal.png"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaAmazon,
  FaYoutube,
  FaShoppingCart,
  FaApple,
} from "react-icons/fa"

export class header extends Component {
  render() {
    return (
      <div className="flex justify-between text-white relative z-40">
        <div className="px-12 py-4">
          <Link to="/">
            <img src={Logo} alt="Logo" style={{ maxWidth: "250px" }} />
          </Link>
        </div>
        <div className="px-12 py-4">
          <div>
            <ul className="flex justify-end text-xl">
              <li className="px-1">
                <FaFacebook />
              </li>
              <li className="px-1">
                <FaInstagram />
              </li>
              <li className="px-1">
                <FaYoutube />
              </li>
              <li className="px-1">
                <FaTwitter />
              </li>
              <li className="px-1">
                <FaSpotify />
              </li>
              <li className="px-1">
                <FaAmazon />
              </li>
              <li className="px-1">
                <FaApple />
              </li>
              <li className="px-1">
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-end text-xl uppercase mt-6">
              <Link to="/auditions">
                <li
                  className="px-3 menu-highlight"
                  style={{ fontFamily: "Fredoka One" }}
                >
                  Auditions
                </li>
              </Link>
              <Link to="/tour">
                <li
                  className="px-3 menu-highlight"
                  style={{ fontFamily: "Fredoka One" }}
                >
                  Tour
                </li>
              </Link>
              <Link to="/videos">
                <li
                  className="px-3 menu-highlight"
                  style={{ fontFamily: "Fredoka One" }}
                >
                  Videos
                </li>
              </Link>
              <Link to="/meet-the-mpk">
                <li
                  className="px-3 menu-highlight"
                  style={{ fontFamily: "Fredoka One" }}
                >
                  Meet The MPK
                </li>
              </Link>
              <li
                className="px-3 menu-highlight"
                style={{ fontFamily: "Fredoka One" }}
              >
                Shop
              </li>
              <Link to="/contact">
                <li
                  className="pl-3 pr-1 menu-highlight"
                  style={{ fontFamily: "Fredoka One" }}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default header
