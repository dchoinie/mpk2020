import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      cd: file(relativePath: { eq: "carousel/orderNow_carousel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            srcWebp
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart: file(relativePath: { eq: "carousel/Clothing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            srcWebp
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      ambassador: file(relativePath: { eq: "carousel/MPK-Ambassador-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            srcWebp
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      monkey: file(relativePath: { eq: "carousel/Dancemonkey.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            srcWebp
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      transitionTime={450}
      interval={4000}
    >
      <a
        href="https://minipopkids.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.cd.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.walmart.childImageSharp.fluid} />
      </a>
      <Link to="/ambassador">
        <Img
          fluid={data.ambassador.childImageSharp.fluid}
          objectFit="cover"
          className="h-full"
        />
      </Link>
      <a
        href="https://www.youtube.com/watch?v=v8DjA66QbeE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.monkey.childImageSharp.fluid} />
      </a>
    </Carousel>
  )
}

export default HomeCarousel
