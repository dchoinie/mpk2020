import React from "react"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import ModalImage from "react-modal-image"

export const londonVIP = graphql`
  {
    allAirtable(
      filter: { table: { eq: "LondonVIP" } }
      sort: { fields: data___img }
    ) {
      edges {
        node {
          id
          data {
            img
            url
          }
        }
      }
    }
  }
`

const london = ({ data }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <Layout backgroundColor="#000">
      <SEO title="London VIP" />
      <PageTitle title="London VIP Gallery" color="#fbed1d" />
      <div className="vip-images-container">
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <ModalImage
                small={node.data.url}
                large={node.data.url}
                hideZoom={true}
                hideDownload={true}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default london
