import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import TourDetail from "../components/tourDetail"

const tourDateTemplate = ({ data }) => {
  return (
    <Layout backgroundColor="#000">
      <TourDetail TourDate={data.airtable} />
    </Layout>
  )
}

export const tourDateQuery = graphql`
  query tourDateQuery($slug: String) {
    airtable(table: { eq: "MPKTourDates" }, data: { slug: { eq: $slug } }) {
      id
      data {
        year
        buttonText
        city
        date(formatString: "MMM DD, YYYY")
        province
        ticketLink
        time
        venue
        vipTix
        weekday
        slug
        shows
        time2
        ticketLink2
        buttonTextShow2
        vipTixShow2
      }
    }
  }
`

export default tourDateTemplate
