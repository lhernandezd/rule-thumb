import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import Like from '../../public/assets/like.svg';

export default function Card(props) {
  const [ toggle, setToggle ] = useState(false);
  const [ active, setActive ] = useState('none');

  const handleToggle = () => {
    if (!toggle && active != 'none') {
      console.log('Envia Voto!')
    }
    active != 'none' && setToggle(!toggle);
  };

  const handleActive = (value) => {
    setActive(value);
  };

  const { name = 'Malala', category = 'Politics', photo = 'https://i.ibb.co/YBTbPQY/mark.png', description = "description", percentage = 51 } = props;
  return (
    <article className="stars__card" style={{ backgroundImage: `url(${photo})`}}>
      <div className="card__content">
        <div className={classNames('content content--like', percentage >= 50 && 'active')}>
          <img src={Like} alt="like" className="content__icon" />
        </div>
        <div className={classNames('content content--dislike', percentage < 50 && 'active')}>
          <img src={Like} alt="dislike" className="content__icon" />
        </div>
        <div className="content__container">
          <h3 className="content__title">{name}</h3>
          <p className="content__description">
            <span className="description__span">1 month ago </span>
            in {category}
          </p>
          <p className={classNames('content__text content__text--default', !toggle && 'active')}>
            {description}
          </p>
          <p className={classNames('content__text content__text--again', toggle && 'active')}>
            Thank you for voting!
          </p>
          <div className="content__buttons">
            {!toggle ?
              <Fragment>
                <div 
                  className={classNames(
                    'buttons thumbs__button',
                    active === 'positive' && 'active'
                  )} 
                  onClick={() => handleActive('positive')}
                >
                  <img src={Like} alt="thumb up" className="button__image" />
                </div>
                <div 
                  className={classNames(
                    'buttons thumbs__button--dislike',
                    active === 'negative' && 'active'
                  )} 
                  onClick={() => handleActive('negative')}
                >
                  <img
                    src={Like}
                    alt="thumb down"
                    className="button__image button__image--dislike"
                  />
                </div>
              </Fragment>
              : null
            }
            <div className="buttons vote__button">
              <div 
                onClick={handleToggle} 
                className={classNames(
                  'button__inline button__inline--now activate',
                  !toggle && 'active'
                )}
              >
                Vote Now
              </div>
              <div 
                onClick={handleToggle} 
                className={classNames(
                  'button__inline button__inline--again activate', 
                  toggle && 'active'
                )}
                >
                Vote again
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__progress">
        <span className="progress__value" style={{ width: `${percentage || '50'}%`}}></span>
        <img
          className="progress__icon--like"
          src={Like}
          alt="like"
        />
        <span className="progress__like">{`${percentage}%` || '50%'}</span>
        <img
          className="progress__icon--dislike"
          src={Like}
          alt="dislike"
        />
        <span className="progress__dislike">
        {percentage 
          ? `${100 - percentage}%`
          : '50%'
        }
        </span>
      </div>
    </article>
  )
}
