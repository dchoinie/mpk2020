import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight, FaStar, FaDollarSign } from "react-icons/fa"
import SEO from "../components/seo"

const DanceAtHome = () => {
  const data = useStaticQuery(graphql`
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
      zoom: file(relativePath: { eq: "zoom-icon.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Dance At Home" />
      <div className="flex my-4">
        <Img fluid={data.header.childImageSharp.fluid} className="w-full" />
      </div>
      <div
        className="flex flex-col lg:flex-row"
        style={{ border: "1px solid red" }}
      >
        <div className="flex flex-col w-full lg:w-1/2 lg:pr-6 bg-white rounded-tl rounded-bl">
          <p>
            Stay home, stay safe and stay entertained with the best-selling
            kids's music group in Canada, the Mini Pop Kids.
          </p>
          <p>
            Looking for ways to keep your kids and students engaged and active
            at home? We have the solution. The Mini Pop Kids are happy to
            instroduce the{" "}
            <span className="uppercase font-bold pink">Dance &#64; Home</span>{" "}
            program to help get kids moving to the songs they love, delivered by
            the brand that teachers and parents trust.
          </p>
          <h4 className="text-gray-700 flex mb-0">
            POP <FaStar className="self-center mx-1 yellow" /> Star
            Chorerography
          </h4>
          <p>
            Learn step by step the moves the Mini Pop Kids do LIVE on stage
            taught by our professional teachers/choreographers.
          </p>
          <h4 className="text-gray-700 mb-0">Follow Along Videos</h4>
          <p>
            Non-stop fun dance routines where young dancers can follow along.
          </p>
          <div className="flex">
            <h4 className="text-gray-700 flex mb-0">Exclusive Zoom Classes </h4>
            <Img
              fluid={data.zoom.childImageSharp.fluid}
              className="w-8 h-8 ml-1 self-center"
            />
          </div>
          <p>
            Bring the Mini Pop Kids and their choreographers to your students
            through a private Zoom class.
          </p>
        </div>
        <div className="flex w-full lg:w-1/2 lg:pl-6 rounded">
          <div className="flex w-full">
            <form
              action="https://formspree.io/mnqbynza"
              method="POST"
              className="flex flex-col w-full text-gray-600 rounded-tr rounded-br"
            >
              <input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Contact Name"
                className="border border-gray-300 p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                name="studio"
                id="studio"
                placeholder="Dance Studio"
                className="border border-gray-300 p-2 rounded w-full my-2"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="border border-gray-300 p-2 rounded w-full my-2"
              />
              <input
                type="text"
                name="province"
                id="province"
                placeholder="Province"
                className="border border-gray-300 p-2 rounded w-full my-2"
              />
              <p className="mt-2">
                Select the program(s) you are interested in below (you can
                select more than one):
              </p>
              <div className="flex">
                <input
                  type="checkbox"
                  name="option1"
                  id="option1"
                  value="POP Star Choreography"
                  className="self-center mr-2"
                />
                <label htmlFor="option1" className="flex self-center mb-0">
                  POP <FaStar className="self-center mx-1 yellow" /> Star
                  Choreography
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name="option2"
                  id="option2"
                  value="Follow Along Programs"
                  className="self-center mr-2"
                />
                <label htmlFor="option2" className="self-center mb-0">
                  Follow Along Videos
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name="option3"
                  id="option3"
                  value="Exclusive Zoom Classes"
                  className="self-center mr-2"
                />
                <label htmlFor="option3" className="flex self-center mb-0">
                  Exclusive Zoom Classes (fee will apply)
                </label>
              </div>
              <div className="flex mt-6 mb-2">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  value="Newsletter"
                  className="self-center mr-2"
                  defaultChecked={true}
                />
                <label
                  htmlFor="newsletter"
                  className="self-center mb-0 text-xs"
                >
                  I agree to my email being stored and used to receive "Dance at
                  Home" program materials, newsletters, pre-sale access codes
                  &amp; dance opportunites.
                </label>
              </div>
              <div className="flex mt-2">
                <button
                  type="submit"
                  className="formButton flex p-2 rounded fredoka tracking-wide"
                >
                  Submit <FaAngleRight className="self-center ml-1 text-xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DanceAtHome

// Dance Studio
// City
// Province
// Contact Name
// 3 Options
//     Pop Star Chorerograph
//     Follow ALong Videos
//     Choreographer Zoom Classes

// checkbox - consent to be added to email List
