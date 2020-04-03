import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const PVImage = graphql`
  {
    pv: file(relativePath: { eq: "PV_web.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    spotify: file(relativePath: { eq: "dspLogos/spotify.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    youtube: file(relativePath: { eq: "dspLogos/youtube.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
    apple: file(relativePath: { eq: "dspLogos/apple.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PersonalVideos = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col mt-24">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl uppercase mb-12 font-bold">
              Get a personal video from a mini pop kid
            </h2>
            <h4 className="text-2xl">Step #1</h4>
            <p>
              Upload a video singing or dancing to one of our songs on{" "}
              <span className="text-lg">Spotify, YouTube, Apple Music</span> or
              wherever you listen to Mini Pop Kids!
            </p>
            <div className="flex mb-6">
              <Img
                fluid={data.spotify.childImageSharp.fluid}
                className="w-40 self-center mr-2"
              />
              <Img
                fluid={data.youtube.childImageSharp.fluid}
                className="w-40 self-center mx-2"
              />
              <Img
                fluid={data.apple.childImageSharp.fluid}
                className="w-40 self-center mx-2"
              />
            </div>
            <h4 className="text-2xl">Step #2</h4>
            <p>
              Post your video on Facebook or Instagram! Be sure to tag us in
              your videos using @minipopkids and don’t forget to use the hashtag
              #minipopkids!
            </p>
            <h4 className="text-2xl">Step #3</h4>
            <p>
              Due to privacy settings on social media, it is sometimes hard for
              us to see your videos. So please make sure you DM us on Facebook
              or Instagram with your video so we can see your future POPstar
              jamming out like a Mini Pop Kid!
            </p>
            <h4 className="text-2xl">Step #4</h4>
            <p>
              Receive a PERSONAL VIDEO from one of the Mini Pop Kids dedicated
              to your child! (We love seeing kids reactions. So please feel free
              to film your reaction and send to us!)
            </p>
            <h4 className="text-2xl">Step #5</h4>
            <p>
              Repeat! Film yourself singing and dancing again to receive ANOTHER
              shout out! See if you can collect personal videos from ALL 9 MINI
              POP KIDS!
            </p>
          </div>
          <div className="flex w-full lg:w-1/2">
            <Img fluid={data.pv.childImageSharp.fluid} className="w-full" />
          </div>
        </div>
        <div className="flex w-full bg-black text-white">
          <p className="p-4">
            Disclaimer: You may send the video directly to us if you are not
            comfortable posting your child online. Please DM us your video on
            Facebook or Instagram and let us know you DO NOT want us posting
            your child to our social channels. You will still receive a personal
            video from a Mini Pop Kid even if you do not post your video
            publicly.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PersonalVideos
