import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      car1: file(relativePath: { eq: "carousel/WEB-banner-FBlive.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcWebp
            srcSetWebp
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car2: file(relativePath: { eq: "carousel/orderNow_carousel.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcWebp
            srcSetWebp
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car3: file(relativePath: { eq: "carousel/Clothing.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcWebp
            srcSetWebp
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car4: file(relativePath: { eq: "carousel/19min.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcWebp
            srcSetWebp
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      car5: file(relativePath: { eq: "carousel/Banner-PersonalVideo.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcWebp
            srcSetWebp
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
      <a
        href="https://www.facebook.com/minipopkids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car1.childImageSharp.fluid} />
      </a>
      <a
        href="https://minipopkids.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car2.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car3.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.youtube.com/watch?v=Gl1Fl6oiL6I"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car4.childImageSharp.fluid} />
      </a>
      <a
        href="https://www.facebook.com/minipopkids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.car5.childImageSharp.fluid} />
      </a>
    </Carousel>
  )
}

export default HomeCarousel
