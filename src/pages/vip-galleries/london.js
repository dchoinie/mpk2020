import React from "react"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import ModalImage from "react-modal-image"
import Modal from "react-bootstrap/Modal"
import ModalDialog from "react-bootstrap/ModalDialog"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalTitle from "react-bootstrap/ModalTitle"
import ModalBody from "react-bootstrap/ModalBody"
import ModalFooter from "react-bootstrap/ModalFooter"

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

function ImageModal() {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal Heading
        </Modal.Title>
      </Modal.Header>
    </Modal>
  )
}

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
