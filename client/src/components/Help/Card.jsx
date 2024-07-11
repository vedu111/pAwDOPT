import React from 'react'
import "./Help.css"
function Card({heading,description}) {
    
    return (
    <>
        
  <div class="card">
    <div class="title-1">{heading}</div>
    <div class="content">
      {description}
    </div>
    <button class="btn">Learn more</button>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
  </div>

  


    </>


    )
}

export default Card