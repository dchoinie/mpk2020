import React from "react"
import { FaEnvelope, FaChevronRight } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Envelope from "../images/envelope.png"

export default () => {
  const data = useStaticQuery(graphql`
    {
      envelope: file(relativePath: { eq: "envelope.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            srcWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <a href="https://ktel.us1.list-manage.com/subscribe?u=3e45fcef3895f21e6ba7bdb20&id=a84d28ce24" target="_blank" rel="noopener noreferrer">
      <div className="flex justify-between my-2">
        <Img
          fluid={data.envelope.childImageSharp.fluid}
          id="footerEnvelope"
          className="hidden lg:block w-20 -mr-6"
          alt="Newsletter"
        />
        <div className="flex flex-col lg:flex-row justify-around flex-grow self-center py-2 bg-main-blue rounded-lg">
          <p className="text-white lg:mb-0 self-center">
            Sign Up For Our Mini Pop Kids Newsletter!
          </p>
            <div className="flex ml-2">
              <button
                type="submit"
                className="flex self-center text-main-gray oswald"
              >
                Sign Up <FaChevronRight className="self-center ml-1" />
              </button>
            </div>
        </div>
      </div>
    </a>
  )
}
