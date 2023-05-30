import React from "react"

const Frame = ({ children}) => {
  return (
    <div className="frame">
      <h1>This is the page title</h1>
      {children}
    </div>
  )
}

export default Frame
