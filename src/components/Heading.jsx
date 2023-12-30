import "./heading.css"
import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <div className="bubbles">
      <h1 className="heading">{props.text}</h1>
      </div>
    </div>
  )
}

