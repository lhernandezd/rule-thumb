import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header.js';

export default function Home() {
  return (
    <Fragment>
      <Header />
      Home
      <Link to='/auth'>
      Go to Auth
      </Link>
    </Fragment>
  )
}
