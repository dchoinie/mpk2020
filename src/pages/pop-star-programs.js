import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export const travellingStageImg = graphql`
  {
    travellingStage: file(relativePath: { eq: "travellingStage.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Travelling Stage" />
      <p>
        We are so excited to announce that we are partnering with the Travelling
        Stage to offer schools, community centers and Montessori programs across
        Canada educational and pop-star inspired programming. Our mission is to
        encourage kids to not only sing along but dance along to the latest
        songs in a kid-friendly &amp; fun-filled environment.
      </p>
      <p>
        The music in this dance program is our focus and key. Kids know the
        words and now they can learn the moves. Travelling Stage is excited to
        be partnering with the best selling kids music group in Canada, to offer
        these exclusive high-energy dance programs that bring out the inner-pop
        star in any student.
      </p>
      <p>
        Click the Traveling Stage logo below for more information on how to book
        these exciting programs for your audience.
      </p>
      <a
        href="https://www.travellingstage.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={data.travellingStage.childImageSharp.fluid}
          style={{ maxWidth: "500px" }}
          className="mx-auto"
        />
      </a>
    </Layout>
  )
}
