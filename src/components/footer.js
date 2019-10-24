import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Newsletter from "../components/newsletter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footerImg: file(relativePath: { eq: "footerImg.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            tracedSVG
            srcWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="mt-12">
      <Link to="/tour">
        <Img fluid={data.footerImg.childImageSharp.fluid} />
      </Link>
      <div>
        <Newsletter />
      </div>
      <div id="footer" className="mt-12">
        <ul id="footer-nav">
          <li className="mx-1">
            <Link to="privacy-policy" className="blue">
              Privacy Policy
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/terms-conditions" className="blue">
              Terms &amp; Conditions
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/" className="blue">
              FAQ
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact" className="blue">
              Contact Us
            </Link>
          </li>
        </ul>
        <div id="footer-copyright">
          <p style={{ color: "var(--main-pink)" }}>
            @ {new Date().getFullYear()} Mini Pop Kids{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
