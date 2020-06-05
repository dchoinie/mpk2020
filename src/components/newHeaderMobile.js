import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  FaAngleUp,
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaAmazon,
  FaApple,
  FaTshirt,
  FaCompactDisc,
  FaBars,
} from "react-icons/fa"

const NewHeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logos/logo-horizontal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="lg:hidden">
      <div className="flex justify-between">
        <div className="flex">
          <Link to="/">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="w-56 self-center"
            />
          </Link>
        </div>
        <div className="flex">
          <button
            className="text-xl focus:outline-none relative text-main-pink"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="self-center" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="flex w-full"
          style={{ height: "calc(100vh - 62.72px)" }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <ul className="flex flex-col text-center mb-0 leading-none">
              <li className="mb-2">
                <Link to="/" className="text-main-pink text-3xl">
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link to="/tour" className="text-main-pink text-3xl">
                  Tour
                </Link>
              </li>
              <li className="my-2">
                <Link to="/music" className="text-main-pink text-3xl">
                  Music
                </Link>
              </li>
              <li className="my-2">
                <Link to="/videos" className="text-main-pink text-3xl">
                  Videos
                </Link>
              </li>
              <li className="my-2">
                <Link to="/fun-at-home" className="text-main-pink text-3xl">
                  Fun @ Home
                </Link>
              </li>
              <li className="my-2">
                <Link to="/ambassador" className="text-main-pink text-3xl">
                  Ambassador
                </Link>
              </li>
              <li className="flex flex-col items-center text-center text-3xl">
                <a href="" className="flex text-main-pink my-2">
                  <FaTshirt className="self-center mr-2" /> Clothing
                </a>
                <a href="" className="flex text-main-pink my-2">
                  <FaCompactDisc className="self-center mr-2" /> Music
                </a>
              </li>
              <li className="mt-2">
                <Link to="/contact" className="text-main-pink text-3xl">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex w-3/4 mx-auto border-t border-main-pink my-4"></div>
            <ul className="flex text-gray-800 mb-0">
              <li className="text-xl mr-1">
                <a
                  href="http://facebook.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="text-xl mx-1 hover:text-main-pink">
                <a
                  href="https://www.instagram.com/minipopkids/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="text-xl mx-1 hover:text-main-pink">
                <a
                  href="https://www.youtube.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="text-xl mx-1 hover:text-main-pink">
                <a
                  href="https://open.spotify.com/artist/2VAjBQ6cM2faT2UKxONV93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaSpotify />
                </a>
              </li>
              <li className="text-xl mx-1 hover:text-main-pink">
                <a
                  href="https://www.amazon.ca/Mini-Kids-Double-2019-Release/dp/B07ZDJRGKQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaAmazon />
                </a>
              </li>
              <li className="text-xl ml-1 hover:text-main-pink">
                <a
                  href="https://music.apple.com/ca/artist/mini-pop-kids/39864063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-black hover:text-highlight-pink"
                >
                  <FaApple />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewHeaderMobile
