import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const ContestImg = graphql`
  {
    contest: file(
      relativePath: { eq: "carousel/2020/WEBSlider-ClothingCONTEST.jpg" }
    ) {
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

const Contest = ({ data }) => {
  return (
    <Layout>
      <div className="form-container">
        <div>
          <Img fluid={data.contest.childImageSharp.fluid} />
        </div>
        <form
          action="https://formspree.io/xeqpqzng"
          method="POST"
          className="flex flex-col text-lg p-6 lg:w-2/3 mx-auto"
        >
          <label htmlFor="firstName" hidden></label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="p-2 border border-gray-200 mb-3 focus:border-main-pink"
          />
          <label htmlFor="lastName" hidden></label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="p-2 border border-gray-200 mb-3 focus:border-main-pink"
          />
          <label htmlFor="email" hidden></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 border border-gray-200 mb-3 focus:border-main-pink"
          />
          <label htmlFor="city" hidden></label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="p-2 border border-gray-200 mb-3 focus:border-main-pink"
          />
          <label htmlFor="province" hidden></label>
          <input
            type="text"
            name="province"
            id="province"
            placeholder="Province / State"
            className="p-2 border border-gray-200 mb-3 focus:border-main-pink"
          />
          <button type="submit" className="bg-main-pink text-white py-2">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contest
