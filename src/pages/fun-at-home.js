import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const coloringQuery = graphql`
  {
    page1: file(relativePath: { eq: "coloring-pages/coloring1.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    page2: file(relativePath: { eq: "coloring-pages/coloring2.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const FunAtHome = ({ data }) => {
  return (
    <Layout>
      <div className="flex">
        <img
          src="https://via.placeholder.com/1280x500"
          alt=""
          className="hidden"
        />
      </div>
      <div className="flex flex-col my-12">
        <h2 className="text-center">
          Welcome to our Fun @ Home Activities Page.
        </h2>
        <p className="max-w-xl mx-auto text-center">
          Stay tuned for weekly updates! We want to see your art and see you
          singing and dancing @ home. Don’t forget to tag us @minipopkids
          #minippkids.
        </p>
        <h2 className="text-5xl my-6 text-center text-black self-center">
          Colouring Pages
        </h2>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col items-center w-full lg:w-1/2 mr-2">
            <div className="w-full flex flex-col">
              <a
                href="https://res.cloudinary.com/dchoinie/image/upload/v1588004558/gatsby-cloudinary/coloring-pages/Mini%20Pop%20Kids%20-%20Coloring%20Page%201.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Img
                  fluid={data.page1.childImageSharp.fluid}
                  className="shadow-md border border-400 w-full lg:w-2/3 mx-auto hover:border-pink-500"
                />
              </a>
              <a
                href="https://res.cloudinary.com/dchoinie/image/upload/v1588004558/gatsby-cloudinary/coloring-pages/Mini%20Pop%20Kids%20-%20Coloring%20Page%201.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="button-pink text-base lg:text-2xl self-center my-4 focus:outline-none"
              >
                Download/Print
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2 ml-2">
            <div className="w-full flex flex-col">
              <a
                href="https://res.cloudinary.com/dchoinie/image/upload/v1588004558/gatsby-cloudinary/coloring-pages/Mini%20Pop%20Kids%20-%20Coloring%20Page%202.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Img
                  fluid={data.page2.childImageSharp.fluid}
                  className="shadow-md border border-gray-400 w-full lg:w-2/3 mx-auto"
                />
              </a>
              <a
                href="https://res.cloudinary.com/dchoinie/image/upload/v1588004558/gatsby-cloudinary/coloring-pages/Mini%20Pop%20Kids%20-%20Coloring%20Page%202.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="button-pink text-base lg:text-2xl self-center my-4 focus:outline-none"
              >
                Download/Print
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <h2 className="text-5xl text-center text-black self-center">
              Sing-A-Long
            </h2>
            <p className="mb-2 text-center">"I Love Me"</p>
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RTr33fN0iqw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ borderRadius: "0.25rem" }}
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <h2 className="text-5xl text-center text-black self-center">
              Dance-A-Long
            </h2>
            <p className="mb-2 text-center">"Sucker"</p>
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/01glAOObWwY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ borderRadius: "0.25rem" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FunAtHome
