import React, { Fragment, useState, useEffect } from 'react';
import classNames from 'classnames';
import Like from '../../public/assets/like.svg';
import axios from 'axios';
import config from '../config.json'

export default function Card(props) {
  const [ totalVotes, setTotalVotes ] = useState(props.votes);
  const [ plusVotes, setPlusVotes ] = useState(props.positiveVotes);
  const [ toggle, setToggle ] = useState(false);
  const [ active, setActive ] = useState('none');

  useEffect(()=> {
    let payload = { votes: totalVotes, positiveVotes: plusVotes };
    const fetchPost = async() => {
      try {
        await axios.put(`${config.baseUrl}/candidates/${props.id}`, payload);
        props.handleReload();
      } catch (error) {
        console.log(error)
      }
    };
    fetchPost();
  }, [totalVotes]);

  const handleToggle = async () => {
    if (!toggle && active != 'none') {
      setTotalVotes(totalVotes + 1);
      active === 'positive' && setPlusVotes(plusVotes + 1);
    }
    active != 'none' && setToggle(!toggle);
  };

  const handleActive = (value) => {
    setActive(value);
  };

  const { votes, name, category, photo, description, percentage } = props;
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
        <span className="progress__value" style={{ width: `${votes ? percentage : '50'}%`}}></span>
        <img
          className="progress__icon--like"
          src={Like}
          alt="like"
        />
        <span className="progress__like">{`${votes ? percentage : '50'}%`}</span>
        <img
          className="progress__icon--dislike"
          src={Like}
          alt="dislike"
        />
        <span className="progress__dislike">
        {votes
          ? `${100 - percentage}%`
          : '50%'
        }
        </span>
      </div>
    </article>
  )
}
