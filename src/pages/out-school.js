import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from '../components/seo'

export const outSchoolQuery = graphql`
{
    discount: file(relativePath: { eq: "outSchoolLanding/$20OFF.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    danceMonkey: file(relativePath: { eq: "outSchoolLanding/dance-moneky.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    dynamite: file(relativePath: { eq: "outSchoolLanding/dynamite.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "outSchoolLanding/OutSchool-logo.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    register1: file(relativePath: { eq: "outSchoolLanding/RegisterButton-1.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    register2: file(relativePath: { eq: "outSchoolLanding/RegisterButton-2.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    savage: file(relativePath: { eq: "outSchoolLanding/savage-love.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    travellingStage: file(relativePath: { eq: "outSchoolLanding/TravelingStage-logo.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const OutSchool = ({ data }) => {
    return (
        <Layout>
            <SEO title="OutSchool" />
            <div className="flex flex-col lg:flex-row my-4">
                <div className="flex flex-col self-center w-full lg:w-1/2">
                    <h2 className="text-3xl">
                        <span className="text-main-pink">Register Now </span>
                        - VIP Popstar Class on Outschool! Meet a Mini Pop Kid in each session!
                    </h2>
                    <p>
                        Future popstars will learn how to sing, dance &amp; perform with the Mini Pop Kids team and get to meet one of the Mini Pop Kids live in their session! Sign up for one or all three sessions.
                    </p>
                    <small className="mb-4">(limited spots available)</small>
                    <div className="flex justify-between">
                        <Img fluid={data.travellingStage.childImageSharp.fluid} className="w-full" />
                        <Img fluid={data.logo.childImageSharp.fluid} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full lg:w-1/2 p-12">
                    <a href="https://outschool.com/?signup=true&usid=IixdK3kF&utm_campaign=share_invite_link" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Img fluid={data.discount.childImageSharp.fluid} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4">
                <div className="flex w-full lg:w-1/2">
                    <Img fluid={data.danceMonkey.childImageSharp.fluid} className="w-full" />
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <h2>Dance Monkey <span className="text-main-pink">Class</span></h2>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 5 - 8</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-dance-monkey-tyxqVxCo?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register1.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 9 - 13</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-dance-monkey-4uU0lU95?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240"
                            target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register2.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4">
                <div className="flex w-full lg:w-1/2">
                    <Img fluid={data.savage.childImageSharp.fluid} className="w-full" />
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <h2>Savage Love <span className="text-main-pink">Class</span></h2>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 5 - 8</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-savage-love-OxQzTcPg?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240"  target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register1.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 9 - 13</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-savage-love-p2BQwRbP?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240" target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register2.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row mb-4">
                <div className="flex w-full lg:w-1/2">
                    <Img fluid={data.dynamite.childImageSharp.fluid} className="w-full" />
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <h2>Dynamite <span className="text-main-pink">Class</span></h2>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 5 - 8</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-dynamite-IsBIJYMp?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240" target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register1.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 self-center text-center">
                            <h5>Ages 9 - 13</h5>
                        </div>
                        <div className="w-1/2">
                            <a href="https://outschool.com/classes/vip-pop-star-experience-with-k-tels-mini-pop-kids-dynamite-RFXRH82b?usid=KGSWByED&signup=true&utm_campaign=share_activity_link#abklwmp240" target="_blank" 
                            rel="noopener noreferrer">
                                <Img fluid={data.register2.childImageSharp.fluid} className="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-responsive">
                <iframe src="https://www.youtube.com/embed/cI6nBljYzNs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Layout>
    )
}

export default OutSchool
