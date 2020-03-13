import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const tourQuery = graphql`
  {
    allAirtable(
      sort: { fields: data___sortId }
      filter: { table: { eq: "MPKTourDates" } }
    ) {
      nodes {
        id
        data {
          city
          date(formatString: "DD MMM")
          province
          ticketLink
          time
          venue
          weekday
          year
          buttonText
          Codes
          vipTix
          slug
          status
        }
      }
    }
    tourImage: file(relativePath: { eq: "tourDetailBanner.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vipDesc: file(relativePath: { eq: "vipDesc.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vip2: file(relativePath: { eq: "vip2.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout backgroundColor="#000">
      <SEO title="Tour" />
      <Img fluid={data.tourImage.childImageSharp.fluid} />
      <div className="flex flex-col lg:flex-row my-6">
        <div className="flex flex-col w-full lg:w-1/2 mx-2">
          <h2 className="text-white uppercase">
            A concert for kids
            <br /> <span className="pink">and parents too!</span>
          </h2>
          <p className="text-white">
            The Mini Pop Kids are back and shining bright with their brand new
            'Bright Lights Concert Tour,’ featuring the year’s biggest hits!
            Performing songs by Ariana Grande, Shawn Mendes, The Jonas Brothers,
            Taylor Swift to throwback favorites that all will enjoy. This isn't
            just a show, it's an experience for the whole family! Don’t miss
            your chance to sing, dance, and POP, with Canada’s best-selling kids
            music group, The MINI POP KIDS.
          </p>
          <h4 className="blue">VIP Packages Available</h4>
          <p className="text-white">
            A limited number of VIP seats are available right up in front with
            the added bonus of meeting the cast at an exclusive MEET &amp;
            GREET. But wait, there’s more...each VIP Spotlight pass comes with
            an autographed poster, a VIP Tour lanyard with an exclusive VIP
            acoustic performance. Don’t miss your chance to shine bright on show
            day with your very own VIP Ticket.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 self-center mx-2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XIBQV7TA9KM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="max-w-3xl yellow mx-auto">
        <p>Hi MPK fans!</p>
        <p>
          Due to public health concerns surrounding COVID-19 (Coronavirus), the
          Mini Pop Kids LIVE shows in March have been postponed until further
          notice.
        </p>
        <p>
          The health and safety of our fans and community is our top priority.
          Ticket holders of postposed shows should hold on to their tickets,
          which will be honoured at the rescheduled dates to be announced soon.
          We cannot wait to share with you this one-of-a-kind family-friendly
          concert experience.
        </p>
        <p>
          We love our fans and we will keep you updated! Keep singing, keep
          dancing and stay safe.
        </p>
        <p>Love, The Mini Pop Kids</p>
      </div>
      <p></p>
      <div className="max-w-3xl mx-auto">
        {data.allAirtable.nodes.map(node => (
          <div
            key={node.data.id}
            className="flex"
            style={{ borderBottom: "1px solid white" }}
          >
            <div
              className="py-6 lg:mr-12 text-center-noimportant flex-none lg:self-center"
              style={{ minWidth: "68px" }}
            >
              <p className="mb-0 text-white">{node.data.weekday}</p>
              <p className="mb-0 fredoka whitespace-no-wrap blue">
                {node.data.date}
              </p>
              <p className="mb-0 text-white">{node.data.year}</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full py-6">
              <div className="flex flex-col self-center text-center-noimportant lg:text-left">
                <p className="mb-0 fredoka text-xl pink">
                  {node.data.city}, {node.data.province}
                </p>
                <p className="mb-0 yellow fredoka">{node.data.venue}</p>
                <p className="text-white lg:mb-0">{node.data.time}</p>
              </div>
              <div className="flex justify-center">
                {node.data.buttonText === "Sold Out" ||
                node.data.buttonText === "Postponed" ? (
                  <>
                    <h4 className="yellow self-center">{node.data.status}</h4>
                  </>
                ) : (
                  <>
                    <OutboundLink
                      href={node.data.ticketLink}
                      target="_blank"
                      className="self-center button-pink text-xl"
                    >
                      {node.data.buttonText}
                    </OutboundLink>
                    <OutboundLink
                      href={node.data.ticketLink}
                      target="_blank"
                      className="self-center button-blue text-xl"
                    >
                      {node.data.vipTix}
                    </OutboundLink>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
