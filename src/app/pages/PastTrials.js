import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className='container'>
      <h1>Past Trials</h1>
      <NavLink className='navigation__link' to='/home'>
        <p>Go to Home</p>
      </NavLink>
    </div>
  )
}
