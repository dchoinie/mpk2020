import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footerImg: file(
        relativePath: { eq: "carousel/bright_lights_tour_carousel.jpg" }
      ) {
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
      <div>
        <Img fluid={data.footerImg.childImageSharp.fluid} />
      </div>
      <div id="footer" className="mt-12">
        <ul id="footer-nav">
          <li className="mx-1">
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
          <li className="mx-1">
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </li>
          <li className="mx-1">FAQ</li>
          <li className="mx-1">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div id="footer-copyright">
          <p>@ {new Date().getFullYear()} Mini Pop Kids </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
