import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
          vipTix
        }
      }
    }
    tourImage: file(relativePath: { eq: "tourPage.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vipDesc: file(relativePath: { eq: "vipDesc.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vip2: file(relativePath: { eq: "vip2.jpg" }) {
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
      <Img fluid={data.tourImage.childImageSharp.fluid} />
      <div className="flex flex-col lg:flex-row my-6 lg:my-2">
        <div className="flex lg:w-1/2">
          <div className="self-center flex flex-col">
            <h2 className="self-center text-xl lg:text-3xl">
              VIP Packages Available
            </h2>
            <p className="self-center">
              A limited number of <span className="font-bold pink">VIP</span>{" "}
              seats are available right up in front with the added bonus of
              meeting the cast at an exclusive MEET &amp; GREET. But wait,
              there’s more...each <span className="font-bold pink">VIP</span>{" "}
              Spotlight pass comes with an autographed poster, a{" "}
              <span className="font-bold pink">VIP</span> Tour lanyard with an
              exclusive <span className="font-bold pink">VIP</span> acoustic
              performance. Don’t miss your chance to shine bright on show day
              with your very own <span className="font-bold pink">VIP</span>{" "}
              Ticket.
            </p>
          </div>
        </div>
        <div className="flex lg:w-1/2">
          <Img
            fluid={data.vip2.childImageSharp.fluid}
            className="w-full my-4"
          />
        </div>
      </div>
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
              <div className="flex">
                <OutboundLink
                  href={node.data.ticketLink}
                  target="_blank"
                  // rel="noopener noreferrer"
                  className="self-center pink text-xl"
                >
                  {node.data.buttonText}
                </OutboundLink>
                <span className="self-center mx-1 text-3xl">|</span>
                <OutboundLink
                  href={node.data.ticketLink}
                  target="_blank"
                  className="self-center blue text-xl"
                >
                  VIP
                </OutboundLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
