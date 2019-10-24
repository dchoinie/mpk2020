import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../../components/seo"

export const mpk17Query = graphql`
  {
    mpk17: contentfulAlbum(title: { eq: "Mini Pop Kids 17" }) {
      cover {
        fluid {
          src
          ...GatsbyContentfulFluid
        }
      }
      releaseDate(formatString: "YYYY")
      spotify
      title
      tracks {
        json
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mpk17.title} />
      <div className="container mx-auto">
        <h2 className="text-center my-12">{data.mpk17.title}</h2>
        <div className="flex justify-between">
          <div className="w-50">
            <Img fluid={data.mpk17.cover.fluid} />
          </div>
          <div className="w-50 text-center">
            <h4>Release Year: {data.mpk17.releaseDate}</h4>
            <iframe
              src={data.mpk17.spotify}
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}
