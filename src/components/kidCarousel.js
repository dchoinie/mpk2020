import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const KidCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      abby: file(relativePath: { eq: "meet/Meet-Abby.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      avery: file(relativePath: { eq: "meet/Meet-Avery.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      carter: file(relativePath: { eq: "meet/Meet-Carter.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      jazzy: file(relativePath: { eq: "meet/Meet-Jazzy.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      kayleigh: file(relativePath: { eq: "meet/Meet-Kayleigh.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      leyonce: file(relativePath: { eq: "meet/Meet-Leyonce.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      peyton: file(relativePath: { eq: "meet/Meet-Peyton.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      tre: file(relativePath: { eq: "meet/Meet-Tre.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      vasili: file(relativePath: { eq: "meet/Meet-Vasili.jpg" }) {
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
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      transitionTime={450}
      interval={2000}
    >
      <Link to="/abby">
        <Img fluid={data.abby.childImageSharp.fluid} />
      </Link>
      <Link to="/avery">
        <Img fluid={data.avery.childImageSharp.fluid} />
      </Link>
      <Link to="/carter">
        <Img fluid={data.carter.childImageSharp.fluid} />
      </Link>
      <Link to="/jazzy">
        <Img fluid={data.jazzy.childImageSharp.fluid} />
      </Link>
      <Link to="/kayleigh">
        <Img fluid={data.kayleigh.childImageSharp.fluid} />
      </Link>
      <Link to="/leyonce">
        <Img fluid={data.leyonce.childImageSharp.fluid} />
      </Link>
      <Link to="/peyton">
        <Img fluid={data.peyton.childImageSharp.fluid} />
      </Link>
      <Link to="/tre">
        <Img fluid={data.tre.childImageSharp.fluid} />
      </Link>
      <Link to="/vasili">
        <Img fluid={data.vasili.childImageSharp.fluid} />
      </Link>
    </Carousel>
  )
}

export default KidCarousel
