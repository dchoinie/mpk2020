import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default ({ TourDate }) => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "tourDetailBanner.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title={TourDate.data.city} />
      <Img
        fluid={data.banner.childImageSharp.fluid}
        className="max-w-full mx-auto"
      />
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2 self-center lg:pr-8 text-center-noimportant lg:text-left">
          <h2 className="text-white">
            {TourDate.data.city}, {TourDate.data.province}
          </h2>
          <h4 className="pink">
            {TourDate.data.weekday} {TourDate.data.date}
          </h4>
          <h4 className="yellow">{TourDate.data.venue}</h4>
          {TourDate.data.shows === 1 ? (
            <h4 className="text-white">{TourDate.data.time}</h4>
          ) : (
            <h4 className="text-white">
              {TourDate.data.time} &amp; {TourDate.data.time2}
            </h4>
          )}
          <h4 className="blue">Vip Packages Available</h4>
          <p className="text-white">
            A limited number of VIP seats are available right up in front with
            the added bonus of meeting the cast at an exclusive MEET &amp;
            GREET. But wait, there’s more...each VIP Spotlight pass comes with
            an autographed poster, a VIP Tour lanyard with an exclusive VIP
            acoustic performance. Don’t miss your chance to shine bright on show
            day with your very own VIP Ticket.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XIBQV7TA9KM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {TourDate.data.shows === 1 ? (
            <div className="flex justify-between py-4">
              <OutboundLink
                href={TourDate.data.ticketLink}
                target="_blank"
                className="button-yellow w-1/2 text-center text-2xl mr-2"
              >
                {TourDate.data.buttonText}
              </OutboundLink>
              <OutboundLink
                href={TourDate.data.ticketLink}
                target="_blank"
                className="button-pink w-1/2 text-center text-2xl ml-2"
              >
                {TourDate.data.vipTix}
              </OutboundLink>
            </div>
          ) : (
            <div className="flex flex-col py-4">
              <h4 className="text-white self-center">
                {TourDate.data.time} tickets:
              </h4>
              <div className="flex">
                <OutboundLink
                  href={TourDate.data.ticketLink}
                  target="_blank"
                  className="button-yellow w-1/2 text-center text-2xl mr-2"
                >
                  {TourDate.data.buttonText}
                </OutboundLink>
                <OutboundLink
                  href={TourDate.data.ticketLink}
                  target="_blank"
                  className="button-pink w-1/2 text-center text-2xl ml-2"
                >
                  {TourDate.data.vipTix}
                </OutboundLink>
              </div>
              <h4 className="text-white self-center pt-4">
                {TourDate.data.time2} tickets:
              </h4>
              <div className="flex">
                <OutboundLink
                  href={TourDate.data.ticketLink2}
                  target="_blank"
                  className="button-yellow w-1/2 text-center text-2xl mr-2"
                >
                  {TourDate.data.buttonTextShow2}
                </OutboundLink>
                <OutboundLink
                  href={TourDate.data.ticketLink2}
                  target="_blank"
                  className="button-pink w-1/2 text-center text-2xl mr-2"
                >
                  {TourDate.data.vipTixShow2}
                </OutboundLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
