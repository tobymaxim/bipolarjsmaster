import React from "react"
import "../styles/index.css"

const Sociallinks = ({ data }) => (
  <div className="sociallinks-main-container">
    <div className="blackbox-sociallinks"><h1 className="headline1">Social Links</h1></div>
    <div className="sociallinks-container">
      <a className="sociallinks" href="https://bipolarberlin.bandcamp.com/" target="_blank" rel="noopener noreferrer"><div className="bandcamp-icon"></div></a>
      <a className="sociallinks" href="https://www.facebook.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="facebook-icon"></div></a>
      <a className="sociallinks" href="https://www.soundcloud.com/bipolarberlin/" target="_blank" rel="noopener noreferrer"><div className="soundcloud-icon"></div></a>
      <a className="sociallinks" href="https://www.instagram.com/bipolar.berlin/" target="_blank" rel="noopener noreferrer"><div className="instagram-icon"></div></a>
    </div>
  </div>
)

export default Sociallinks