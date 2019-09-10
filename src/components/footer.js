import React, { Component } from "react"

export class footer extends Component {
  render() {
    return (
      <div
        className="flex justify-between px-12"
        style={{
          backgroundColor: "var(--main-black)",
          color: "#fff",
          height: "300px",
        }}
      >
        <div>Footer Area 1</div>
        <div>Footer Area 2</div>
        <div>Footer Area 3</div>
      </div>
    )
  }
}

export default footer
