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
} from "react-icons/fa"

const NewHeader = () => {
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
    <div className="hidden lg:flex flex-col pt-4 pb-2">
      <div className="flex justify-end">
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
      <div className="flex justify-between">
        <div className="flex">
          <Link to="/">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="w-64 self-center"
            />
          </Link>
        </div>
        <div className="flex">
          <ul className="flex text-xl self-center mb-0">
            <li className="mr-2 self-center">
              <Link to="/" className="pink">
                Home
              </Link>
            </li>
            <li className="mx-2 self-center">
              <Link to="/tour" className="pink">
                Tour
              </Link>
            </li>
            <li className="mx-2 self-center">
              <Link to="/music" className="pink">
                Music
              </Link>
            </li>
            <li className="mx-2 self-center">
              <Link to="/videos" className="pink">
                Videos
              </Link>
            </li>
            <li className="mx-2 self-center">
              <Link to="/fun-at-home" className="pink">
                Fun @ Home
              </Link>
            </li>
            <li className="mx-2 self-center">
              <Link to="/ambassador" className="pink">
                Ambassador
              </Link>
            </li>
            <li className="mx-2 self-center">
              <button
                className="pink flex fredoka relative focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                Shop{" "}
                {isOpen === true ? (
                  <FaAngleUp className="self-center ml-1" />
                ) : (
                  <FaAngleDown className="self-center ml-1" />
                )}
              </button>
              {isOpen && (
                <div className="flex absolute z-40 w-40 bg-white p-2 shadow-md border border-gray-300 rounded">
                  <ul className="flex flex-col">
                    <li className="py-2">
                      <a
                        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pink flex"
                      >
                        <FaTshirt className="mr-2 self-center" />
                        Clothing
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        href="https://shop.minipopkids.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pink flex"
                      >
                        <FaCompactDisc className="mr-2 self-center" /> Music
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="ml-2 self-center">
              <Link to="/contact" className="pink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NewHeader
