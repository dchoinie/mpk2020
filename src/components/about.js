import React, { Component } from "react"
import { FaChild, FaListOl, FaGlobeAmericas } from "react-icons/fa"

export class about extends Component {
  render() {
    return (
      <div
        className="flex justify-around text-center"
        style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      >
        <div className="flex-col px-12" style={{ color: "var(--main-pink)" }}>
          <div className="text-6xl flex justify-center pb-4">
            <FaChild />
          </div>
          <h3 className="text-2xl">Family-Friendly</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim
            totam suscipit rerum reprehenderit qui voluptas placeat. Laudantium
            quis velit, recusandae amet cumque nisi placeat saepe non.
            Consequuntur, asperiores quisquam.
          </p>
        </div>
        <div className="flex-col px-12" style={{ color: "var(--main-pink)" }}>
          <div className="text-6xl flex justify-center pb-4">
            <h2 style={{ maxHeight: "64px" }}>#1</h2>
          </div>
          <h3 className="text-2xl">Chart-Topping</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim
            totam suscipit rerum reprehenderit qui voluptas placeat. Laudantium
            quis velit, recusandae amet cumque nisi placeat saepe non.
            Consequuntur, asperiores quisquam.
          </p>
        </div>
        <div className="flex-col px-12" style={{ color: "var(--main-pink)" }}>
          <div className="text-6xl flex justify-center pb-4">
            <FaGlobeAmericas />
          </div>
          <h3 className="text-2xl">World-Wide Tour</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim
            totam suscipit rerum reprehenderit qui voluptas placeat. Laudantium
            quis velit, recusandae amet cumque nisi placeat saepe non.
            Consequuntur, asperiores quisquam.
          </p>
        </div>
      </div>
    )
  }
}

export default about
