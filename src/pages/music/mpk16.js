import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from "react-bootstrap/Modal"
import SpotifyLogo from "../../images/spotifyLogo.png"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="mpk16-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="mpk16-modal" className="fredoka">
          Mini Pop Kids 16
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://open.spotify.com/embed/album/2DOI0mKAHzp0OrigVAl2AP"
          width="100%"
          height="500px"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export const mpk16Query = graphql`
  {
    mpk16: contentfulAlbum(title: { eq: "Mini Pop Kids 16" }) {
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
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-center my-12">{data.mpk16.title}</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-100 lg:w-50 px-2">
            <Img fluid={data.mpk16.cover.fluid} />
          </div>
          <div className="w-100 lg:w-50 px-2 text-center">
            <h4>Release Year: {data.mpk16.releaseDate}</h4>
            <button onClick={() => setModalShow(true)}>
              <div className="flex justify-center">
                <h4 className="self-center pr-1">Listen On</h4>
                <img src={SpotifyLogo} alt="" style={{ maxWidth: "150px" }} />
              </div>
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
