import React, { useContext } from "react"
import { Navbar } from "react-bootstrap"
import Logo from "../images/logos/logo-horizontal.png"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
  const { isCartOpen, addProductToCart } = useContext(StoreContext)
  return (
    <Navbar collapseOnSelect expand="lg" className="flex pt-4">
      <Link to="/" className="w-1/2 lg:w-1/4">
        <Img fluid={data.logo.childImageSharp.fluid} id="nav-logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="flex-col w-full">
          <div id="nav-socials">
            <ul className="flex">
              <li className="mx-2">
                <a
                  href="https://www.facebook.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.instagram.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.youtube.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://open.spotify.com/artist/2VAjBQ6cM2faT2UKxONV93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
                >
                  <FaSpotify />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.amazon.ca/Mini-Kids-Double-2019-Release/dp/B07ZDJRGKQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
                >
                  <FaAmazon />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://music.apple.com/ca/artist/mini-pop-kids/39864063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black"
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
