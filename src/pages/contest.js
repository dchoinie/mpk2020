import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const ContestImg = graphql`
  {
    contest: file(
      relativePath: { eq: "carousel/2020/WEBSlider-ClothingCONTEST.jpg" }
    ) {
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

const Contest = ({ data }) => {
  return (
    <Layout>
      <div className="form-container">
        <div>
          <Img fluid={data.contest.childImageSharp.fluid} />
        </div>
        <form
          action="https://formspree.io/xeqpqzng"
          method="POST"
          className="flex flex-col text-lg p-6 lg:w-2/3 mx-auto"
        >
          <label htmlFor="firstName" hidden></label>
          <input
            type="text"
            name="_fname"
            id="firstName"
            placeholder="First Name"
            className="p-2 border border-gray-200 mb-3"
            required
          />
          <label htmlFor="lastName" hidden></label>
          <input
            type="text"
            name="_lname"
            id="lastName"
            placeholder="Last Name"
            className="p-2 border border-gray-200 mb-3"
            required
          />
          <label htmlFor="email" hidden></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 border border-gray-200 mb-3"
            required
          />
          <label htmlFor="city" hidden></label>
          <input
            type="text"
            name="_city"
            id="city"
            placeholder="City"
            className="p-2 border border-gray-200 mb-3"
            required
          />
          <label htmlFor="province" hidden></label>
          <select
            name="state_province"
            id="state_province"
            className="p-2 border border-gray-200 mb-3"
            required
          >
            <option disabled selected value className="text-gray-500">
              Province/State
            </option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DC">District of Columbia</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
          </select>
          <div className="flex mb-3">
            <input
              type="checkbox"
              name="_optin"
              id="opt-in"
              className="self-center mr-2"
              checked
            />
            <label
              htmlFor="_optin"
              className="text-xs text-gray-500 self-center mb-0"
            >
              By clicking Submit, you agree to send your info to Mini Pop Kids
              who agrees to use it according to their privacy policy
            </label>
          </div>
          <button type="submit" className="bg-main-pink text-white py-2">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Contest
