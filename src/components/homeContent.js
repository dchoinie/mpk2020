import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import KidCarousel from "../components/kidCarousel"

export default () => {
  const data = useStaticQuery(graphql`
    {
      liveImg: file(relativePath: { eq: "homeContent/LiveShows.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      mpk17: file(relativePath: { eq: "homeContent/MPK17.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      meetTheMPK: file(relativePath: { eq: "homeContent/MeetMPK2.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      musicVideos: file(relativePath: { eq: "homeContent/MusicVideos.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart: file(relativePath: { eq: "homeContent/Clothing.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      newsletter: file(relativePath: { eq: "newsletterImg.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      fblive: file(relativePath: { eq: "homeContent/FBLive-button.png" }) {
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
    <div id="home-grid" className="text-center my-12">
      <a
        href="https://www.facebook.com/minipopkids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.fblive.childImageSharp.fluid} />
      </a>

      <a
        href="https://minipopkids.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.mpk17.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.walmart.childImageSharp.fluid} />
      </a>
      <Link to="/videos">
        <Img fluid={data.musicVideos.childImageSharp.fluid} />
      </Link>
      <a
        href="https://mailchi.mp/minipopkids/newsletter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.newsletter.childImageSharp.fluid} />
      </a>
      <Link to="/meet-the-mpk">
        <Img fluid={data.meetTheMPK.childImageSharp.fluid} />
      </Link>
    </div>
  )
}
