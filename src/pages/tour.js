import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const tourQuery = graphql`
  {
    allAirtable(sort: { fields: data___sortId }) {
      nodes {
        id
        data {
          city
          date(formatString: "DD MMM")
          province
          ticketLink
          time
          venue
          weekday
          year
          buttonText
          Codes
        }
      }
    }
    tourImage: file(relativePath: { eq: "FB-BlackFriday.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Tour" />
      <PageTitle title="Tour" />
      <div className="max-w-2xl mx-auto">
        <Img fluid={data.tourImage.childImageSharp.fluid} />
      </div>
      <p className="max-w-2xl mx-auto py-4">
        Black Friday and Cyber Monday just got a little brighter with the
        biggest{" "}
        <span className="font-bold uppercase pink">FLASH FANDOM sale</span> in
        Mini Pop Kids Live history. See promo codes below for up to 25% select
        tickets, in select cities while quantities last. Promo codes begin on
        Black Friday and expire on Cyber Monday at 11:59PM
        <br />
        <small>* no exchanges on previously purchased tickets.</small>
      </p>
      <div className="max-w-3xl mx-auto">
        {data.allAirtable.nodes.map(node => (
          <div
            key={node.data.id}
            className="flex"
            // style={{ border: "1px solid red" }}
          >
            <div
              className="py-6 lg:mr-12 text-center-noimportant flex-none"
              style={{ minWidth: "68px" }}
            >
              <p className="mb-0">{node.data.weekday}</p>
              <p className="mb-0 fredoka whitespace-no-wrap">
                {node.data.date}
              </p>
              <p className="mb-0">{node.data.year}</p>
            </div>
            <div
              className="flex flex-col self-center lg:flex-row lg:justify-between w-full py-6"
              // style={{ border: "1px solid green" }}
            >
              <div className="flex flex-col self-center text-center-noimportant lg:text-left">
                <p className="mb-0 fredoka text-xl">
                  {node.data.city}, {node.data.province}
                </p>
                <p className="mb-0">{node.data.venue}</p>
                <p>{node.data.time}</p>
              </div>
              <p className="self-center mb-0">{node.data.Codes}</p>
              <a
                href={node.data.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-center pink text-xl"
              >
                {node.data.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
