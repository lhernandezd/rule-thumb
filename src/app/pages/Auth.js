import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='container'>
      Auth
      <Link to='/home'>
      Go to Home
      </Link>
    </div>
  )
}