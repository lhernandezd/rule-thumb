import React from 'react';
import { NavLink } from 'react-router-dom';
import Twitter from '../../public/assets/twitter.svg';
import Facebook from '../../public/assets/facebook.svg';

export default function Footer() {
  return (
    <footer class='footer'>
      <div class='footer__div footer__div--contact'>
        <NavLink class='footer__link scale' to='/'>Terms and Conditions</NavLink>
        <NavLink class='footer__link scale' to='/'>Privacy Policy</NavLink>
        <NavLink class='footer__link scale' to='/'>Contact Us</NavLink>
      </div>
      <div class='footer__div footer__div--media'>
        <NavLink class='footer__link scale' to='/'>Follow Us</NavLink>
        <NavLink class='footer__link scale' to='/'>
          <img class='media__icon' src={Facebook} alt='Facebook' />
        </NavLink>
        <NavLink class='footer__link scale' to='/'>
          <img class='media__icon' src={Twitter} alt='Twitter' />
        </NavLink>
      </div>
    </footer>
  )
}
