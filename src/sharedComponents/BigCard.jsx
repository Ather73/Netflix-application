import React from 'react'
import '../assets/css/big_card.css'
const BigCard = (props) => {
    
  return (
    <div className="big_card">
        <img src={props.image} alt="" />
    </div>
  )
}

export default BigCard