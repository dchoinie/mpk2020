import React from "react"

export default () => {
  return (
    <div id="footer" className="mt-12">
      <ul id="footer-nav">
        <li className="mx-1">Privacy Policy</li>
        <li className="mx-1">Terms Of Use</li>
        <li className="mx-1">FAQ</li>
        <li className="mx-1">Contact Us</li>
      </ul>
      <div id="footer-copyright">
        <p>@ {new Date().getFullYear()} Mini Pop Kids </p>
      </div>
    </div>
  )
}
