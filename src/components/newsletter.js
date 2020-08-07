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
        <form
          action="https://formspree.io/xknwgllk"
          method="POST"
          name="NewsletterForm"
          className="self-center flex"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="p-1 px-3 rounded-full focus:bg-gray-200 text-main-gray"
            id="newsletterEmail"
            required
          />
          <div className="flex ml-2">
            <button
              type="submit"
              className="flex self-center text-main-gray oswald"
            >
              Sign Up <FaChevronRight className="self-center ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
