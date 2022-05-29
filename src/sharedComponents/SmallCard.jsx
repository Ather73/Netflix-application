import React from 'react'
import '../assets/css/small_card.css'
const SmallCard = (props) => {
  return (
    <div className="small_card">
        <img src={props.image} alt="" />
    </div>
  )
}

export default SmallCard