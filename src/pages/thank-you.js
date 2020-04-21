import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import SEO from "../components/seo"

const ThankYou = () => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "tourDetailBanner.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout backgroundColor="#000">
      <SEO title="Thank You" />
      <h2 className="text-white text-3xl text-center my-12">Thank You!</h2>
      <Img fluid={data.banner.childImageSharp.fluid} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col text-center mt-6 lg:mt-0 self-center">
          <h3 className="pink">Thank You</h3>
          <h5 className="text-white">for joining us on our</h5>
          <h5 className="blue">Bright Lights Tour 2020</h5>
          <div className="flex text-xl justify-center text-white py-2">
            <a
              href="https://www.facebook.com/minipopkids"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebook className="mr-1" />
            </a>
            <a
              href="https://www.instagram.com/minipopkids/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram className="mx-1" />
            </a>
            <a
              href="https://www.youtube.com/minipopkids"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaYoutube className="mx-1" />
            </a>
            <a
              href="https://twitter.com/minipopkids"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter className="ml-1" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XIBQV7TA9KM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYou
