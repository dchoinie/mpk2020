import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      album: file(relativePath: { eq: "carousel/2020/Slider-MPK18now.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart: file(relativePath: { eq: "carousel/2020/Slider-Walmart.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      video: file(
        relativePath: { eq: "carousel/2020/Slider-YT-Dontstartnow.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80) {
            srcSetWebp
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      contest: file(
        relativePath: { eq: "carousel/2020/WEBSlider-ClothingCONTEST.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 80) {
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
      <a
        href="https://www.youtube.com/minipopkids"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={data.video.childImageSharp.fluid} className="w-full" />
      </a>
    </Carousel>
  )
}

export default HomeCarousel
