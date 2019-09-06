
import React from 'react'
import { NavLink } from 'react-router-dom';

import Close from '../../public/assets/white_close.svg';
import Search from '../../public/assets/search.svg';
import Burger from '../../public/assets/burger.svg';

export default function NavBar() {
  const sections = [
    {
      label: 'Past Trials',
      path: 'pastTrials',
    },
    {
      label: 'How it works',
      path: 'how',
    },
    {
      label: 'Log In / Sign Up ',
      path: 'auth',
    }
  ]
  return (
      <div className='navbar'>
        <nav className='navbar__section'>
          <NavLink className='navbar__item navbar__item-brand' to='/'>
            <h1 className='navbar__title'>Rule of Thumb</h1>
          </NavLink>
        </nav>
        <nav className='navbar__section navbar__section--right'>
          <div className='navbar__item--close' id='close'>
            <img
              className='navbar__icon search__image'
              src={Close}
            />
          </div>
          {sections.map((section, index) =>
            <div key={index} className='navbar__item'>
              <NavLink className='navbar__link' to={`/${section.path}`}>
                {section.label}
              </NavLink>
            </div>
          )}
          <div className='navbar__item'>
            <span className='navbar__link'>
              <img
                className='navbar__icon search__image'
                src={Search}
              />
            </span>
          </div>
        </nav>
        <div id='burger' className='navbar__section navbar__section--toggle'>
          <img className='navbar__icon burger__image' src={Burger} />
        </div>
      </div>
  )
}
