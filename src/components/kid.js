import React from "react"
import Img from "gatsby-image"
import kids from "./kids"
import { FaInstagram } from "react-icons/fa"

export default ({ kid }) => {
  return (
    <div>
      <h2>{kid.name}</h2>
      <p className="mb-0">Birthday: {kid.birthday}</p>
      <p className="mb-0">Age: {kid.age}</p>
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
      <Img fluid={kid.headshot.fluid} />
      <p className="mb-0">{kid.bio.bio}</p>
    </div>
  )
}
