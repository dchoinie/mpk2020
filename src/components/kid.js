import React from "react"
import Img from "gatsby-image"
import Link from "gatsby"
import kids from "./kids"
import { FaInstagram } from "react-icons/fa"

export default ({ kid }) => {
  return (
    <div>
      <h2>{kid.name}</h2>
      <Img fluid={kid.headshot.fluid} className="my-2" />
      <div className="instagram-btn">
        <a
          href={kid.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          Follow {kid.name} On Instagram
        </a>
        <FaInstagram className="self-center text-xl" />
      </div>
    </div>
  )
}
