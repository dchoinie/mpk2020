import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Walmart = () => {
  const data = useStaticQuery(graphql`
    {
      clothing: file(relativePath: { eq: "clothing.jpg" }) {
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
      <div>
        <Img fluid={data.clothing.childImageSharp.fluid} />
        <div className="flex py-6">
          <div className="w-1/2 flex">
            <h4 className="pink self-center mb-0">
              Check out the new Mini Pop Kids clothing line at your local
              Walmart!
            </h4>
          </div>
          <div className="w-1/2 flex justify-center">
            <a
              href="https://www.walmart.ca/en/mini-pop-kids/N-51184998"
              target="_blank"
              className="button-pink self-center text-4xl"
            >
              Shop Now!
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h4>List of Stores</h4>
      </div>
      <div className="cities-grid">
        {data.allAirtable.edges.map(({ node: walmart }) => {
          return (
            <div key={walmart.id} className="">
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
