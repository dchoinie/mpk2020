import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      liveImg: file(relativePath: { eq: "live_shot.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      meetImg: file(relativePath: { eq: "meet.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      shopImg: file(relativePath: { eq: "shop.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="home-grid" className="text-center">
      <Link className="home-card whitespace-no-wrap" to="/tour">
        <div>
          <h2>MPK Tour</h2>
          <Img
            style={{ borderRadius: "0.5rem" }}
            fluid={data.liveImg.childImageSharp.fluid}
          />
          <h5 className="py-2">Tickets On Sale Now!</h5>
        </div>
      </Link>
      <Link className="home-card whitespace-no-wrap" to="/shop">
        <div>
          <h2>MPK Shop</h2>
          <Img
            style={{ borderRadius: "0.5rem" }}
            fluid={data.shopImg.childImageSharp.fluid}
          />
          <h5 className="py-2">Get Your MPK Swag!</h5>
        </div>
      </Link>
      <Link className="home-card whitespace-no-wrap" to="/meet-the-mpk">
        <div>
          <h2>Meet The MPK</h2>
          <Img
            style={{ borderRadius: "0.5rem" }}
            fluid={data.meetImg.childImageSharp.fluid}
          />
          <h5 className="py-2">Meet The Kids!</h5>
        </div>
      </Link>
    </div>
  )
}
