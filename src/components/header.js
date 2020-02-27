import React, { Component } from "react"
import { Navbar } from "react-bootstrap"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/logo-horizontal.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className="w-1/2 lg:w-1/4">
      <Img fluid={data.logo.childImageSharp.fluid} id="nav-logo" />
    </Link>
  )
}

export class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="flex pt-4 px-0">
        <Logo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="flex-col w-full">
            <div id="nav-socials">
              <ul className="flex">
                <li className="mr-2">
                  <a
                    href="https://www.facebook.com/minipopkids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.instagram.com/minipopkids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.youtube.com/minipopkids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://open.spotify.com/artist/2VAjBQ6cM2faT2UKxONV93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaSpotify />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.amazon.ca/Mini-Kids-Double-2019-Release/dp/B07ZDJRGKQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaAmazon />
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://music.apple.com/ca/artist/mini-pop-kids/39864063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue"
                  >
                    <FaApple />
                  </a>
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
                  <Link to="/auditions" className="pink">
                    Auditions
                  </Link>
                </li>
                <li className="lg:mx-2 flex">
                  <Dropdown style={{ display: "flex" }}>
                    <Dropdown.Toggle
                      id="shop-dropdown"
                      style={{
                        backgroundColor: "transparent",
                        color: "#ed418e",
                        fontFamily: "Fredoka One",
                        border: "none",
                        fontSize: "1.25rem",
                        padding: "0",
                        verticalAlign: "top",
                      }}
                    >
                      Shop
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ed418e" }}
                      >
                        Clothing
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://shop.minipopkids.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ed418e" }}
                      >
                        Music
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
}

export default Header
