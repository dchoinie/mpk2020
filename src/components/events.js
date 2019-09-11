import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../images/live_shot2.jpg"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allAirtable(limit: 5, sort: { fields: data___date }) {
        nodes {
          data {
            city
            date(formatString: "MMMM DD")
            province
            time
            venue
            ticketLink
          }
          recordId
        }
      }
    }
  `)
  return (
    <div
      id="eventsDiv"
      className="flex-col text-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${Background})`,
        backgroundAttachment: "fixed",
        color: "#fff",
      }}
    >
      <h2 className="text-4xl py-6">Upcoming Events</h2>
      <div className="container mx-auto">
        {data.allAirtable.nodes.map(node => (
          <div key={node.recordId} className="flex justify-between">
            <ul className="flex">
              <li
                style={{ fontFamily: "Fredoka One" }}
                className="mx-2 my-6 borderRight self-center text-2xl"
              >
                {node.data.date}
              </li>
              <li
                style={{ fontFamily: "Fredoka One" }}
                className="mx-2 my-6 borderRight self-center text-2xl"
              >
                {node.data.city}, {node.data.province}
              </li>
              <li
                style={{ fontFamily: "Fredoka One" }}
                className="mx-2 my-6 self-center text-2xl"
              >
                {node.data.venue}
              </li>
            </ul>
            <a
              href={node.data.ticketLink}
              target="_blank"
              rel="noopener"
              className="my-6 eventButton self-center"
            >
              Buy Tickets
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
