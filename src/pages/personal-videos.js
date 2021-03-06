import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const PVImage = graphql`
  {
    pv: file(relativePath: { eq: "PersonalVideo1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
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
      <SEO title="Personal Videos" />
      <div className="flex flex-col">
        <div className="flex w-full">
          <Img fluid={data.pv.childImageSharp.fluid} className="w-full" />
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <h4 className="text-2xl">Step #1</h4>
            <p>
              Record a video singing or dancing to one of our songs on{" "}
              <span className="text-lg">
                <a
                  href="https://open.spotify.com/artist/2VAjBQ6cM2faT2UKxONV93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink"
                >
                  Spotify,{" "}
                </a>
                <a
                  href="https://www.youtube.com/minipopkids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink"
                >
                  YouTube,{" "}
                </a>
                <a
                  href="https://music.apple.com/ca/artist/mini-pop-kids/39864063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink"
                >
                  Apple Music{" "}
                </a>
              </span>
              or wherever you listen to Mini Pop Kids music!
            </p>
            <div className="flex mb-6">
              <a
                href="https://open.spotify.com/artist/2VAjBQ6cM2faT2UKxONV93"
                target="_blank"
                rel="noopener noreferrer"
                className="pink self-center w-40"
              >
                <Img
                  fluid={data.spotify.childImageSharp.fluid}
                  className="w-full self-center mr-1"
                />
              </a>
              <a
                href="https://www.youtube.com/minipopkids"
                target="_blank"
                rel="noopener noreferrer"
                className="pink self-center w-40 mx-1"
              >
                <Img
                  fluid={data.youtube.childImageSharp.fluid}
                  className="w-full self-center"
                />
              </a>
              <a
                href="https://music.apple.com/ca/artist/mini-pop-kids/39864063"
                target="_blank"
                rel="noopener noreferrer"
                className="pink self-center w-40 ml-1"
              >
                <Img
                  fluid={data.apple.childImageSharp.fluid}
                  className="w-full self-center"
                />
              </a>
            </div>
            <h4 className="text-2xl">Step #2</h4>
            <p>
              Upload your video to Facebook or Instagram! Be sure to tag us
              using @minipopkids and don’t forget to use the hashtag
              #minipopkids
            </p>
            <h4 className="text-2xl">Step #3</h4>
            <p>
              Due to privacy settings on social media, it is sometimes hard for
              us to see your videos. So please make sure you direct message us
              on Facebook or Instagram with your video so we can see your future
              POPstar jamming out like a Mini Pop Kid!
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 p-4">
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
        </div>
        <div className="flex w-full bg-black text-white">
          <p className="text-sm p-3">
            Disclaimer: You may send the video directly to us if you are not
            comfortable posting your child online. Please direct message us your
            video on Facebook or Instagram and let us know you DO NOT want us
            posting your child to our social channels. You will still receive a
            personal video from a Mini Pop Kid even if you do not post your
            video publicly.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PersonalVideos
