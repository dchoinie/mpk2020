import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AlbumDetail from "../components/albumDetail"

const albumDetailTemplate = ({ data }) => {
  return (
    <Layout>
      <AlbumDetail album={data.contentfulAlbum} />
    </Layout>
  )
}

export const albumDetailQuery = graphql`
  query albumDetailQuery($slug: String!) {
    contentfulAlbum(slug: { eq: $slug }) {
      cover {
        fluid {
          src
          ...GatsbyContentfulFluid
        }
      }
      id
      releaseDate(formatString: "YYYY")
      slug
      spotify
      title
      tracks {
        tracks
      }
      buyCd
    }
  }
`

export default albumDetailTemplate
