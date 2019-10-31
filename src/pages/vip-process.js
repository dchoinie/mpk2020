import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

export const vipQuery = graphql`
  {
    site {
      siteMetadata {
        tourName
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="VIP Process" />
      <PageTitle title="VIP Process" />
      <h4>
        We are so excited that you will be joining us for the MINI POP KIDS
        LIVE: {data.site.siteMetadata.tourName}!
      </h4>
      <p>
        Your VIP ticket instructions are below. Be sure to follow us on
        INSTAGRAM and FACEBOOK to get all the backstage access leading up to
        your show. See you soon!
      </p>
      <ul>
        <li>
          STEP 1: Take VIP Ticket to the MERCH table in the LOBBY to get your
          VIP Boarding Pass.
        </li>
        <li>STEP 2: Sing along, dance along and Enjoy the Show!</li>
        <li>
          STEP 3: Stay seated after the show and await further instructions for
          the post-show VIP MEET and GREET.
        </li>
        <li>
          STEP 4: Meet the MINI POP KIDS for a photo and get your autographed
          poster
        </li>
        <li>
          STEP 5: Share your pictures with us using #minipopkids and tag us
          @minipopkids so we can stay in touch.
        </li>
      </ul>
      <p>Love, The Mini Pop Kids</p>
    </Layout>
  )
}
