import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import { FaYoutube } from "react-icons/fa"

export const videosQuery = graphql`
  {
    allContentfulMusicVideo(sort: { fields: releaseDate, order: DESC }) {
      nodes {
        id
        releaseDate
        title
        youTubeEmbed {
          youTubeEmbed
        }
      }
    }
  }
`
export default ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Videos" />
      <div id="videos-container">
        {data.allContentfulMusicVideo.nodes.map(node => (
          <div key={node.id} className="text-center">
            <div>
              <h6>{node.title}</h6>
              <div className="video-container">
                <iframe
                  title={node.title}
                  src={node.youTubeEmbed.youTubeEmbed}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
