import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Walmart = () => {
  const data = useStaticQuery(graphql`
    {
      walmart1: file(relativePath: { eq: "walmart-group/1.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart2: file(relativePath: { eq: "walmart-group/2.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart3: file(relativePath: { eq: "walmart-group/3.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart4: file(relativePath: { eq: "walmart-group/4.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart5: file(relativePath: { eq: "walmart-group/5.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart6: file(relativePath: { eq: "walmart-group/6.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart7: file(relativePath: { eq: "walmart-group/7.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      walmart8: file(relativePath: { eq: "walmart-group/8.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      clothing: file(relativePath: { eq: "walmart-page.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      allAirtable(
        filter: { table: { eq: "Walmart" } }
        sort: { fields: data___sortId }
      ) {
        edges {
          node {
            id
            data {
              address
              city
              province
              sortId
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Walmart Canada" />
      <div>
        <Img fluid={data.clothing.childImageSharp.fluid} />
        <div className="flex flex-col lg:flex-row lg:justify-between py-6 px-6 lg:px-12">
          <div className="flex w-full justify-center lg:justify-start lg:w-2/3">
            <h4 className="pink self-center mb-0 text-3xl text-center-noimportant lg:text-left">
              Check out the new Mini Pop Kids
              <br /> clothing line at select Walmart stores!
            </h4>
          </div>
          <div className="flex w-full lg:w-1/3 py-4 lg:py-0 justify-center">
            <a
              href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
              target="_blank"
              className="button-pink self-center text-3xl whitespace-no-wrap"
              rel="noopener noreferrer"
            >
              Shop Now!
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-container text-center py-6">
        <Carousel
          centerMode
          centerSlidePercentage={33.33}
          emulateTouch
          autoPlay={true}
          showIndicators={true}
          showStatus={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <Link to="/">
            <Img fluid={data.walmart1.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart3.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart4.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart5.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart6.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart7.childImageSharp.fluid} />
          </Link>
          <Link to="/">
            <Img fluid={data.walmart8.childImageSharp.fluid} />
          </Link>
        </Carousel>
      </div>
      <div className="flex justify-center pt-6">
        <h4>List of Stores</h4>
      </div>
      <div className="cities-grid">
        {data.allAirtable.edges.map(({ node: walmart }) => {
          return (
            <div key={walmart.id} className="self-center">
              <p className="text-xs mb-0 text-right">
                {walmart.data.address} {walmart.data.city},{" "}
                {walmart.data.province}
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Walmart
