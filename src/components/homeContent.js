import React from "react"
import Live from "../images/live_shot.png"
import Meet from "../images/meet.png"
import Shop from "../images/shop.png"

export default () => {
  return (
    <div id="home-grid" className="my-12">
      <div className="mx-auto text-center">
        <h2>Live Shows</h2>
        <img
          src={Live}
          alt="Live Shows"
          className="p-2"
          style={{ borderRadius: "1rem" }}
        />
        <h4>Tickets on sale now!</h4>
      </div>
      <div className="mx-auto text-center">
        <h2>Meet The Kids</h2>
        <img
          src={Meet}
          alt="Meet The Kids"
          className="p-2"
          style={{ borderRadius: "1rem" }}
        />
        <h4>Meet Our Newest Kids!</h4>
      </div>
      <div className="mx-auto text-center">
        <h2>MPK Shop</h2>
        <img
          src={Shop}
          alt=""
          className="p-2"
          style={{ borderRadius: "1rem" }}
        />
        <h4>MPK17 Coming Soon!</h4>
      </div>
    </div>
  )
}
