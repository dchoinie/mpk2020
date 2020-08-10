import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export class kid extends Component {
  constructor(props) {
    super(props)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      isHovered: false,
      image: this.props.kid.headshot.fluid,
    }
  }

  onMouseOver() {
    console.log("Mouse Over")
    this.setState({
      isHovered: true,
      image: this.props.kid.headshotStar.fluid,
    })
  }

  onMouseOut() {
    console.log("Mouse Out")
    this.setState({
      isHovered: false,
      image: this.props.kid.headshot.fluid,
    })
  }

  render() {
    const { kid } = this.props
    return (
      <Link
        to={`/${kid.slug}`}
        className="black"
        onMouseEnter={() => this.onMouseOver()}
        onMouseLeave={() => this.onMouseOut()}
      >
        {/* <h2>{kid.name}</h2> */}
        <Img fluid={this.state.image} className="my-2 rounded-md" />
      </Link>
    )
  }
}

export default kid
