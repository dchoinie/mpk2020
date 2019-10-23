import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import KidCarousel from "../components/kidCarousel"

export default () => {
  const data = useStaticQuery(graphql`
    {
      liveImg: file(relativePath: { eq: "liveShows.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      mpk17: file(relativePath: { eq: "MPK17.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      musicVideos: file(relativePath: { eq: "musicVideos.jpg" }) {
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
    <div
      id="home-grid"
      className="text-center my-12"
      // style={{ border: "1px solid red" }}
    >
      <Link to="/tour">
        <Img fluid={data.liveImg.childImageSharp.fluid} />
      </Link>
      <a
        href="https://minipopkids.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.mpk17.childImageSharp.fluid} />
      </a>
      <Link to="/videos">
        <Img fluid={data.musicVideos.childImageSharp.fluid} />
      </Link>
      <KidCarousel />
      <Link to="/">
        <img src="https://via.placeholder.com/500x400" alt="" />
      </Link>
      <Link to="/">
        <img src="https://via.placeholder.com/500x400" alt="" />
      </Link>
    </div>
  )
}
