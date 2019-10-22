import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Kid from "./kid"

const getKids = graphql`
  {
    kids: allContentfulKid(sort: { fields: name }) {
      edges {
        node {
          age
          bio {
            bio
          }
          birthday(formatString: "MMMM,DD YYYY")
          id
          headshot {
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
          instagram
          name
          slug
        }
      }
    }
  }
`
const kids = () => {
  return (
    <div>
      <StaticQuery
        query={getKids}
        render={data => {
          return (
            <div id="kids-container" className="text-center">
              {data.kids.edges.map(({ node: kid }) => {
                return <Kid key={kid.id} kid={kid} />
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

export default kids
