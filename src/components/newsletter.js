import React from "react"
import { FaEnvelope } from "react-icons/fa"
import Envelope from "../images/envelope.png"

export default () => {
  return (
    <div className="flex justify-between my-2 py-2">
      <div>
        <img src={Envelope} alt="Newsletter" style={{ maxWidth: "75px" }} />
      </div>
      <div
        className="flex justify-around flex-grow"
        style={{
          backgroundColor: "var(--main-blue)",
          border: "2px solid var(--highlight-blue)",
        }}
      >
        <h6 className="mb-0 self-center">
          Sign Up For Our Mini Pop Kids Newsletter!
        </h6>
        <form
          action="https://formspree.io/xbneerkx"
          method="POST"
          className="self-center"
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
          />
          <input
            type="submit"
            value="Sign-Up"
            style={{ backgroundColor: "transparent" }}
            className="px-1"
          ></input>
        </form>
      </div>
    </div>
  )
}
