import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaStar, FaArrowRight, FaYoutube } from "react-icons/fa"

export const albumQuery = graphql`
  {
    header: file(relativePath: { eq: "Dance@Home-Header.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    mpk16: file(relativePath: { eq: "mpk16_album.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          srcSetWebp
          ...GatsbyImageSharpFluid
        }
      }
    }
    mpk12: file(relativePath: { eq: "mpk12_album.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          srcSetWebp
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ep5 = ({ data }) => {
  return (
    <Layout>
      <div>
        <Img fluid={data.header.childImageSharp.fluid} className="w-full" />
        <div className="flex flex-col items-center my-6">
          <h2 className="text-5xl lg:text-6xl">Episode #5</h2>
          <div className="flex">
            <h2 className="flex text-3xl lg:text-5xl pink my-6 text-center-noimportant">
              POP
              <span className="yellow lg:mx-1 lg:self-center hidden lg:block">
                <FaStar />
              </span>
              Star Choreography Class
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center mb-6 w-full lg:w-1/3">
              <h3 className="text-3xl pb-2">"Take Flight"</h3>
              <Img fluid={data.mpk16.childImageSharp.fluid} className="w-48" />
            </div>
            <div className="flex w-full lg:w-2/3">
              <p className="text-xl self-center">
                Get ready to TAKE FLIGHT with Jazzy, Vasili and their fried
                Alivia in this Pop Star Choreography class. Learn step by step
                the dance the Mini Pop Kids perform LIVE o stage in their
                concerts. This is an original song off Mini Pop Kids 16 and was
                performed to over 50,000 fans on the Take Flight Concert Tour
                Don’t forget to upload your dancing videos using
                #mpkdancewithus! Stay safe keep dancing!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0 lg:mr-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ASrXg1n783Q"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="flex justify-center text-3xl lg:text-5xl pink my-6 text-center-noimportant">
            Follow{" "}
            <span className="self-center hidden lg:block">
              <FaArrowRight className="blue mx-1" />
            </span>
            Along Dance Video
          </h2>
          <div className="flex flex-col lg:flex-row mb-6">
            <div className="flex flex-col items-center w-full lg:w-1/3">
              <h3 className="text-3xl pb-2 text-center-noimportant">
                "Shake It Off"
              </h3>
              <Img fluid={data.mpk12.childImageSharp.fluid} className="w-48" />
            </div>
            <div className="flex w-full lg:w-2/3">
              <p className="text-xl self-center">
                This song is an absolute classic with Mini Pop Kid fans around
                the world. We love performing this song LIVE on stage and it has
                been a fan favourite since we first performed it on national
                television alongside MPK alumni, Johnny Orlando. Just follow the
                Mini Pop Kids and be sure to upload your videos using
                #mpkdancewithus for your studio's chance to win studio of the
                week! Get up, shake it off and most importantly, have fun!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full lg:w-1/2 lg:mr-2 mb-2 lg:mb-0 mx-auto">
              <div className="flex w-full video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/XRcfmLEb1X4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ep5
