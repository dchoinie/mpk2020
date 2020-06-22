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
    dsn: file(relativePath: { eq: "dontStartNow.jpg" }) {
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

const Ep6 = ({ data }) => {
  return (
    <Layout>
      <div>
        <Img fluid={data.header.childImageSharp.fluid} className="w-full" />
        <div className="flex flex-col items-center my-6">
          <h2 className="text-5xl lg:text-6xl">Episode #6</h2>
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
              <h3 className="text-3xl pb-2">"Don't Start Now"</h3>
              <Img fluid={data.dsn.childImageSharp.fluid} className="w-48" />
            </div>
            <div className="flex w-full lg:w-2/3">
              <p className="text-xl self-center">
                We are so excited that our new cover to Dua Lipa's hit track,
                DON'T START NOW is out on Spotify! You won't hear any drums,
                guitars, or instruments in our new version; just our voices.
                Dance along to our beatbox track and learn from industry
                renowned choreographer, JENNA (Disney Zombie's, Shawn Mendes
                etc.) in this extra special pop star choreography class. Don’t
                forget to upload your dancing videos using #mpkdancewithus! Stay
                safe keep dancing!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0 lg:mr-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/fLZzdKAjusU"
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
              <h3 className="text-3xl pb-2 text-center-noimportant">"ME!"</h3>
              <Img fluid={data.mpk16.childImageSharp.fluid} className="w-48" />
            </div>
            <div className="flex w-full lg:w-2/3">
              <p className="text-xl self-center">
                It's hard not to love every song that Taylor Swift sings! One of
                our favourites off our newest album, Mini Pop Kids 17, has to be
                ME! Hopefully you have as much fun watching our music video as
                we had making it. Follow along as you dance to a track that is
                all about ME! Follow the Mini Pop Kids on social media and be
                sure to upload your videos using #mpkdancewithus for your
                studio's chance to win studio of the week! Get up, dance it out
                and most importantly, have fun!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full lg:w-1/2 lg:mr-2 mb-2 lg:mb-0">
              <div className="flex w-full video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/rYGz-PMi2yM"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:ml-2">
              <div className="flex w-full video-responsive">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/gsYLZbJlQA0"
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

export default Ep6
