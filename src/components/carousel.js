import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      car4: file(relativePath: { eq: "carousel/Clothing.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcWebp
            tracedSVG
            srcSetWebp
            base64
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car1: file(relativePath: { eq: "carousel/tourNew.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcWebp
            tracedSVG
            srcSetWebp
            base64
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car2: file(relativePath: { eq: "carousel/orderNow_carousel.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcWebp
            tracedSVG
            srcSetWebp
            base64
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car3: file(relativePath: { eq: "carousel/TruthHurts_Carousel.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
            srcWebp
            tracedSVG
            srcSetWebp
            base64
            srcSet
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
      <Img fluid={data.car4.childImageSharp.fluid} />
      <Link to="/tour">
        <Img fluid={data.car1.childImageSharp.fluid} />
      </Link>
      <a
        href="https://minipopkids.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car2.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.youtube.com/watch?v=m29m-mpDpgU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car3.childImageSharp.fluid} />
      </a>
    </Carousel>
  )
}

export default HomeCarousel
