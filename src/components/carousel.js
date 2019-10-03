import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Otr from "../images/carousel/otr_carousel.jpg"
import Senorita from "../images/carousel/senorita_carousel.png"
import Tour from "../images/carousel/bright_lights_tour_carousel.jpg"

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        transitionTime={450}
        interval={4000}
      >
        <div>
          <img src={Tour} />
        </div>
        <div>
          <img src={Otr} />
        </div>
        <div>
          <img src={Senorita} />
        </div>
      </Carousel>
    )
  }
}

export default HomeCarousel
