import React from "react"
import Tour from "../images/carousel/bright_lights_tour_carousel.jpg"

export default () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Tour})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "150px",
      }}
    ></div>
  )
}
