import React from 'react'
import '../assets/css/navbar.css'
const Navbar = () => {
  return (
    <nav>
        <img src="data:image/jpeg;base64,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" alt="" />
    </nav>
  )
}

export default Navbar