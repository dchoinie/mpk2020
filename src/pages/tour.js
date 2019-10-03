import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export const tourQuery = graphql`
  {
    allAirtable(sort: { fields: data___date }) {
      nodes {
        id
        data {
          city
          date(formatString: "DD MMM")
          province
          ticketLink
          time
          venue
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Tour" />
      <div>
        {data.allAirtable.nodes.map(node => (
          <div
            key={node.id}
            className="flex justify-between my-6 py-2"
            style={{
              borderBottom: "1px solid grey",
              fontFamily: "Fredoka One",
            }}
          >
            <div className="flex">
              <p className="pr-2">{node.data.date}</p>
              <p className="px-2">
                {node.data.city}, {node.data.province}
              </p>
              <p className="px-2 hidden md:block">{node.data.venue}</p>
              <p className="px-2 hidden lg:block">{node.data.time}</p>
            </div>
            <div className="flex">
              <a
                href={node.data.ticketLink}
                target="_blank"
                rel="noopener"
                className=""
              >
                Get Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
