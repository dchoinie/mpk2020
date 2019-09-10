import React, { Component } from "react"
import Hero from "../images/live_shot.png"

export class hero extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4), rgba(0,0,0,1)) ,url(${Hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "-107.6px",
        }}
      >
        <div
          className="flex w-full justify-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
          }}
        >
          <h2 className="text-5xl">Canada's #1 Music Brand For Kids</h2>
        </div>
      </div>
    )
  }
}

export default hero
