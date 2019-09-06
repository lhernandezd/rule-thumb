
import React from 'react'
import Navbar from './Navbar';

import Wikipedia from '../../public/assets/wikipedia.svg';
import Like from '../../public/assets/like.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <Navbar/>
        <div className='header__section'>
          <section className='section__article'>
            <h2 className='article__title'>
              <span className='article__title--span'>
                What's is your opinion on
              </span>
              Pope Francis?
            </h2>
            <p className='article__text'>
              He's Talking tough on clergy sexual abuse, but is he just another
              papal pervert protector? (thumbs down) or a true pedophile
              punishing pontiff? (thumbs up).
            </p>
            <a className='article__link' href='#'>
              <img
                className='article__icon'
                src={Wikipedia}
                alt='Wikipedia'
              />
              More Information
            </a>
            <p className='article__question'>What's Your Verdict?</p>
          </section>
          <div className='section__vote'>
            <div className='vote vote--like'>
              <img
                className='section__icon'
                src={Like}
                alt='Thumbs up'
              />
            </div>
            <div className='vote vote--dislike'>
              <img
                className='section__icon section__icon--dislike'
                src={Like}
                alt='Thumbs down'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='header__footer'>
        <div className='footer__section footer__section--left'>
          <p className='section__text'>CLOSING IN</p>
        </div>
        <div className='footer__section footer__section--right'>
          <p className='section__text section__text--right'>
            <span className='section__text section__text--span'>22</span> days
          </p>
        </div>
      </div>
    </header>
  )
}
