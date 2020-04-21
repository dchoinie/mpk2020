import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Newsletter from "../components/newsletter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footerImg: file(relativePath: { eq: "footer-banner-fblive.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
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
    <div className="mt-12">
      <a
        href="https://www.facebook.com/minipopkids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.footerImg.childImageSharp.fluid} />
      </a>

      <div>
        <Newsletter />
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-6">
        <ul className="flex flex-col self-center text-center-noimportant lg:flex-row">
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
            <Link to="/faq" className="blue">
              FAQ
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact" className="blue">
              Contact Us
            </Link>
          </li>
        </ul>
        <div id="footer-copyright" className="self-center">
          <p style={{ color: "var(--main-pink)" }}>
            &copy; {new Date().getFullYear()} Mini Pop Kids
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
