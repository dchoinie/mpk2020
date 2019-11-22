import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export class kid extends Component {
  state = {
    isStarShowing: false,
  }
  render() {
    const { kid } = this.props
    return (
      <Link to={`/${kid.slug}`} className="black">
        <div className="kidImageHover">
          <h2>{kid.name}</h2>
          <Img fluid={kid.headshotStar.fluid} className="my-2" />
        </div>
      </Link>
    )
  }
}

export default kid

// const kid = ({ kid }) => {
//   return (
//     <Link to={`/${kid.slug}`} className="black">
//       <div className="kidImageHover">
//         <h2>{kid.name}</h2>
//         <Img fluid={kid.headshot.fluid} className="my-2 headshot" />
//         <Img fluid={kid.headshotStar.fluid} className="my-2 headshotStar" />
//       </div>
//     </Link>
//   )
// }

// export default kid
