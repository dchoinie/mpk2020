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
    mpk17: file(relativePath: { eq: "mpk17_album.jpg" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          srcSetWebp
          ...GatsbyImageSharpFluid
        }
      }
    }
    danceMonkey: file(relativePath: { eq: "DanceMonkey.jpg" }) {
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

const Ep3 = ({ data }) => {
  return (
    <Layout>
      <div>
        <Img fluid={data.header.childImageSharp.fluid} className="w-full" />
        <div className="flex flex-col items-center my-6">
          <h2 className="text-5xl lg:text-6xl">Episode #3</h2>
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
              <h3 className="text-3xl pb-2">"Dance Monkey"</h3>
              <Img
                fluid={data.danceMonkey.childImageSharp.fluid}
                className="w-48"
              />
            </div>
            <div className="flex w-full lg:w-2/3">
              <p className="text-xl self-center">
                Join industry choreographer Jamie (Ariana Grande, Madonna, Demi
                Lovato) as he takes you step-by-step through the moves the mini
                pops perform in their newest music video, DANCE MONKEY. Dancers
                from across the country submitted dancing videos to be a part of
                this awesome project. It celebrates the efforts kids and parents
                are making to stay safe, stay at home and stay entertained
                during these challenging times. Learn the moves, watch the music
                video &amp; have fun!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full mb-4 lg:mb-0 lg:mr-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cuc4_qQESzw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-full lg:ml-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/v8DjA66QbeE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center my-6">
          <h2 className="flex text-3xl lg:text-5xl pink my-6 text-center-noimportant">
            Follow{" "}
            <span className="self-center hidden lg:block">
              <FaArrowRight className="blue mx-1" />
            </span>
            Along Dance Video
          </h2>
          <p className="text-center text-xl">
            Get ready to follow along to one of the sweetest tracks off Mini Pop
            Kids 17, Sucker. This is the perfect opportunity to get the whole
            family up singing and dancing to this chart topping track. Just
            follow the Mini Pop Kids and be sure to send upload your videos
            using #mpkdancewithus for your studio's chance to win studio of the
            week!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col items-center self-center w-full lg:w-1/2">
            <h3 className="text-3xl pb-2 text-center-noimportant">"Sucker"</h3>
            <Img fluid={data.mpk17.childImageSharp.fluid} className="w-48" />
          </div>
          <div className="flex w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex w-full video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/01glAOObWwY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center my-24">
        <a
          herf="https://www.youtube.com/minipopkids"
          target="_blank"
          rel="noopener noreferrer"
          className="button-pink text-3xl fredoka flex text-white cursor-pointer mr-2 self-center"
        >
          Subscribe <FaYoutube className="self-center ml-2 text-4xl" />
        </a>
        <h3 className="self-center ml-2 mb-0 text-3xl text-center-noimportant mt-6 lg:mt-0">
          To our YouTube Channel for more MPK fun!
        </h3>
      </div>
    </Layout>
  )
}

export default Ep3
