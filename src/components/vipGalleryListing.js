import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "VIPGalleries" } }
        sort: { fields: data___date }
      ) {
        edges {
          node {
            id
            data {
              city
              date(formatString: "MMM DD, YYYY")
              linkDest
              province
              time
              venue
              viewGallery
            }
          }
        }
      }
    }
  `)
  return (
    <div className="max-w-3xl mx-auto">
      {data.allAirtable.edges.map(({ node: gallery }) => {
        return (
          <div key={gallery.id} style={{ borderBottom: "1px solid white" }}>
            <div className="flex py-6">
              <p className="blue fredoka mb-0 lg:mr-12 lg:self-center">
                {gallery.data.date}
              </p>
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col fredoka self-center text-center-noimportant lg:text-left">
                  <p className="mb-0 pink text-xl">{gallery.data.city}</p>
                  <p className="lg:mb-0 yellow">{gallery.data.venue}</p>
                </div>
                <Link
                  to={gallery.data.linkDest}
                  className="self-center button-pink whitespace-no-wrap"
                >
                  {gallery.data.viewGallery}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
