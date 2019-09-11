import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allAirtable(limit: 5, sort: { fields: data___date }) {
      nodes {
        data {
          city
          date(formatString: "")
          province
          time
          venue
        }
        recordId
      }
    }
  }
`

export default ({ data }) => (
  <div
    className="flex-col text-center justify-center"
    style={{
      backgroundColor: "var(--main-black)",
      color: "#fff",
      height: "500px",
    }}
  >
    <h2 className="text-4xl py-12">Upcoming Events</h2>
    <div className="container mx-auto">
      {data.allAirtable.nodes.map(node => (
        <div key={node.recordId}>
          <p>{node.data.city}</p>
        </div>
      ))}
    </div>
  </div>
)
