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
      <div
        className="flex flex-col lg:flex-row justify-around flex-grow self-center py-2"
        style={{
          backgroundColor: "var(--main-blue)",
          border: "2px solid var(--highlight-blue)",
        }}
      >
        <h6 className="mb-0 self-center">
          Sign Up For Our Mini Pop Kids Newsletter!
        </h6>

        <form
          action="https://formspree.io/xknwgllk"
          method="POST"
          name="Newsletter Form"
          className="self-center flex"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            style={{
              borderRadius: "2rem",
              backgroundColor: "lightgray",
              border: "1px solid grey",
            }}
            className="px-2"
            id="newsletterEmail"
            required
          />
          <div className="flex">
            <input
              type="submit"
              value="Sign-Up"
              style={{ backgroundColor: "transparent" }}
              className="px-1"
            ></input>
            <FaChevronRight className="self-center pl-1" />
          </div>
        </form>
      </div>
    </div>
  )
}
