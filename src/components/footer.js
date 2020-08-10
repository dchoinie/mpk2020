import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Newsletter from "../components/newsletter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footerImg: file(relativePath: { eq: "footer/YT-bar.jpg" }) {
        childImageSharp {
          fluid(quality: 70) {
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
        href="https://music.youtube.com/channel/UCj8q6WdiVP0EJViq0vQItvw"
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
            <Link to="privacy-policy" className="text-main-blue oswald">
              Privacy Policy
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/terms-conditions" className="text-main-blue oswald">
              Terms &amp; Conditions
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/" className="text-main-blue oswald">
              FAQ
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact" className="text-main-blue oswald">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="self-center">
          <p className="text-main-pink">
            &copy; {new Date().getFullYear()} Mini Pop Kids
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
