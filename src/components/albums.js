import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Album from "./album"

const getAlbums = graphql`
  {
    albums: allContentfulAlbum(sort: { order: DESC, fields: releaseDate }) {
      edges {
        node {
          cover {
            fluid(maxWidth: 800) {
              src
              srcSet
              ...GatsbyContentfulFluid_tracedSVG
            }
            id
            title
          }
          releaseDate(formatString: "YYYY")
          title
          slug
          tracks {
            tracks
          }
          buyCd
        }
      }
    }
  }
`
export default () => {
  return (
    <div>
      <StaticQuery
        query={getAlbums}
        render={(data) => {
          return (
            <div id="albums-container" className="text-center">
              {data.albums.edges.map(({ node: album }) => {
                return <Album key={album.id} album={album} />
              })}
            </div>
          )
        }}
      />
    </div>
  )
}
