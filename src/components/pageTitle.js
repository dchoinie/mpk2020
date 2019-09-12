import React, { Component } from "react"
import BackgroundImage from "../images/live_shot2.jpg"

export class pageTitle extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "25vh",
          marginTop: "-108px",
        }}
      ></div>
    )
  }
}

export default pageTitle
