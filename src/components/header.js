import React, { useState } from "react"
import Navbar from './Navbar'
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton"

const Header = ({ children, data }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="desktop-navbar">
          <div className="header-video-container">
            <video
              loop="1"
              width="100%"
              height="250"
              controls=""
              autoPlay
              autoplay="1"
              name="media"
              src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/Sequenz-03_11.mp4"
              type="video/mp4">
            </video>
          </div>
          {data && <Navbar data={data} />}
        </div>
        <div className="mobile-navbar">
          <div className="header-mobile-container">
            <div className="header-mobile-column-left"></div>
            <div className="header-mobile-column-middle">
              <img className="header-mobile-logo" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/bipolar_logo-0.svg" alt="" />
            </div>
            <div className="header-mobile-column-right"><DrawerToggleButton click={drawerToggleClickHandler} /></div>
          </div>
          {data && <SideDrawer data={data} click={backdropClickHandler} show={sideDrawerOpen} />}
          {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
        </div>
      </header>
      {children}
    </div>
  )

}

export default Header

