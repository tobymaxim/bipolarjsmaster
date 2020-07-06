import React from "react"
import containerStyles from "../styles/global.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)