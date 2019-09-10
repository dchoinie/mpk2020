import React, { Component } from "react"
import { FaChild, FaCanadianMapleLeaf, FaGlobeAmericas } from "react-icons/fa"

export class about extends Component {
  render() {
    return (
      <div
        className="flex justify-around text-center"
        style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
      >
        <div className="flex-col px-12" style={{ color: "var(--main-pink)" }}>
          <div className="text-6xl flex justify-center pb-4">
            <FaChild />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim
            totam suscipit rerum reprehenderit qui voluptas placeat. Laudantium
            quis velit, recusandae amet cumque nisi placeat saepe non.
            Consequuntur, asperiores quisquam.
          </p>
        </div>
        <div className="flex-col px-12" style={{ color: "var(--main-pink)" }}>
          <div className="text-6xl flex justify-center pb-4">
            <FaCanadianMapleLeaf />
          </div>
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
