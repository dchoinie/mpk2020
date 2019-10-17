import React from "react"
import Img from "gatsby-image"

const kidDetail = ({ kid }) => {
  return (
    <div className="flex flex-col lg:flex-row my-12">
      <div className="w-full lg:w-50 self-center">
        <Img fluid={kid.headshot.fluid} />
      </div>
      <div className="w-full lg:w-50 text-center self-center">
        <h2 className="text-5xl">{kid.name}</h2>
        <h5>Birthday: {kid.birthday}</h5>
        <h5>Age: {kid.age}</h5>
        <p className="text-left py-2">{kid.bio.bio}</p>
        <a href={kid.instagram} className="instagram-btn">
          Follow {kid.name} on Instagram
        </a>
      </div>
    </div>
  )
}

export default kidDetail
