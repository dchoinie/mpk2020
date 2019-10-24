import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      car1: file(relativePath: { eq: "carousel/bannerTour.jpg" }) {
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
      car2: file(relativePath: { eq: "carousel/otr_carousel.jpg" }) {
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
      car3: file(relativePath: { eq: "carousel/senorita_carousel.png" }) {
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
      <div>
        <Img fluid={data.car1.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.car2.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.car3.childImageSharp.fluid} />
      </div>
    </Carousel>
  )
}

export default HomeCarousel
