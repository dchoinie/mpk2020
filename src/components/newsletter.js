import React from "react"
import { FaEnvelope, FaChevronRight } from "react-icons/fa"
import Envelope from "../images/envelope.png"

export default () => {
  return (
    <div className="flex justify-between my-2">
      <img
        src={Envelope}
        alt="Newsletter"
        id="footerEnvelope"
        className="hidden lg:block"
      />
      <div
        className="flex flex-col lg:flex-row justify-around flex-grow self-center py-2"
        style={{
          backgroundColor: "var(--main-blue)",
          border: "2px solid var(--highlight-blue)",
        }}
      >
        <h6 className="mb-0 self-center">
          Sign Up For Our Mini Pop Kids Newsletter!
        </h6>

        <form
          action="https://formspree.io/xknwgllk"
          method="POST"
          className="self-center flex"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            style={{
              borderRadius: "2rem",
              backgroundColor: "lightgray",
              border: "1px solid grey",
            }}
            className="px-2"
            id="newsletterEmail"
          />
          <div className="flex">
            <input
              type="submit"
              value="Sign-Up"
              style={{ backgroundColor: "transparent" }}
              className="px-1"
            ></input>
            <FaChevronRight className="self-center pl-1" />
          </div>
        </form>
      </div>
    </div>
  )
}
