import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TourDate from "./tourDate"

const getTourDates = graphql`
  {
    dates: allAirtable(
      filter: { table: { eq: "MPKTourDates" } }
      sort: { fields: data___sortId }
    ) {
      edges {
        node {
          id
          data {
            buttonText
            city
            date(formatString: "MMM DD, YYYY")
            province
            slug
            ticketLink
            time
            venue
            vipTix
            weekday
            sortId
            shows
            time2
            ticketLink2
            buttonTextShow2
            vipTixShow2
          }
        }
      }
    }
  }
`
export default () => {
  return (
    <div>
      <StaticQuery
        query={getTourDates}
        render={data => {
          return (
            <div>
              {data.dates.edges.map(({ node: TourDate }) => {
                return <TourDate key={TourDate.id} TourDate={TourDate} />
              })}
            </div>
          )
        }}
      />
    </div>
  )
}
