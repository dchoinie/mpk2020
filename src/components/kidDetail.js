import React from "react"
import Img from "gatsby-image"

const kidDetail = ({ kid }) => {
  return (
    <div className="flex flex-col lg:flex-row my-12">
      <div className="w-full lg:w-50 self-center">
        <Img fluid={kid.headshot.fluid} />
      </div>
      <div className="w-full lg:w-50 self-center">
        <div className="flex flex-col my-4 lg:my-0 text-center-noimportant lg:text-left">
          <h2 className="mb-0">Meet</h2>
          <h2 className="text-6xl">{kid.name}</h2>
        </div>
        <div id="kidFact-container">
          <div className="flex flex-col">
            <h4 className="font-bold">Age</h4>
            <p>{kid.age} Years Old</p>
          </div>
          <div className="flex flex-col">
            <h4 className="fold-bold">{kid.fact1q}</h4>
            <p>{kid.fact1a}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="fold-bold">{kid.fact2q}</h4>
            <p>{kid.fact2a}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="fold-bold">{kid.fact3q}</h4>
            <p>{kid.fact3a}</p>
          </div>
        </div>
        <p className="py-2">{kid.bio.bio}</p>
      </div>
    </div>
  )
}

export default kidDetail

{
  /* <h2 className="text-5xl">{kid.name}</h2>
<h5>Birthday: {kid.birthday}</h5>
<h5>Age: {kid.age}</h5>
<p className="text-left py-2">{kid.bio.bio}</p>
<a href={kid.instagram} className="instagram-btn">
Follow {kid.name} on Instagram
</a> */
}
