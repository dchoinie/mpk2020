import React, { Component } from "react"
import PropTypes from "prop-types"

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
  }

  render() {
    return (
      <div
        className="flex justify-center text-center my-12"
        style={{ color: this.props.color }}
      >
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default pageTitle
