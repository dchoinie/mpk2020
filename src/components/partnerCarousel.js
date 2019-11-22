import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const PartnerCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      partner1: file(relativePath: { eq: "partners/koba-logo.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      partner2: file(relativePath: { eq: "partners/sick-kids.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      partner3: file(relativePath: { eq: "partners/YPAD.png" }) {
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
    <div className="my-12 text-center">
      <h2>Friends Of The MPK</h2>
      <Carousel
        centerMode
        centerSlidePercentage={50}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        transitionTime={450}
        interval={4000}
        className="my-4"
      >
        <Img
          fluid={data.partner1.childImageSharp.fluid}
          className="bg-white h-full"
        />
        <Img
          fluid={data.partner2.childImageSharp.fluid}
          className="bg-white h-full"
        />
        <Img
          fluid={data.partner3.childImageSharp.fluid}
          className="bg-white h-full"
        />
      </Carousel>
    </div>
  )
}

export default PartnerCarousel
