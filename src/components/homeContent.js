import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      ambassador: file(
        relativePath: { eq: "homeContent/2020/B-Ambassador.jpg" }
      ) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      meet: file(relativePath: { eq: "homeContent/2020/B-MeetMPK.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      album: file(relativePath: { eq: "homeContent/2020/B-MPK18.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      videos: file(relativePath: { eq: "homeContent/2020/B-MusicVideos.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      newsletter: file(
        relativePath: { eq: "homeContent/2020/B-Newsletter.jpg" }
      ) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart: file(relativePath: { eq: "homeContent/2020/B-Walmart-1.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
      <a
        href="https://shop.minipopkids.com/collections/albums/products/mini-pop-kids-18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.album.childImageSharp.fluid} className="w-full" />
      </a>
      <a
        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.walmart.childImageSharp.fluid} className="w-full" />
      </a>
      <Link to="/meet-the-mpk">
        <Img fluid={data.meet.childImageSharp.fluid} className="w-full" />
      </Link>
      <Link to="/ambassador">
        <Img fluid={data.ambassador.childImageSharp.fluid} className="w-full" />
      </Link>
      <Link to="/videos">
        <Img fluid={data.videos.childImageSharp.fluid} className="w-full" />
      </Link>
      <a
        href="http://eepurl.com/b1ARlP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.newsletter.childImageSharp.fluid} className="w-full" />
      </a>
    </div>
  )
}
