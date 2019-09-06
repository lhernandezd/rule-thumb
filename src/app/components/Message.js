import React, { useState } from 'react'
import Close from '../../public/assets/close.svg';

export default function Message(props) {
  const [ closed, setClosed ] = useState(false);

  const { title, subtitle, description } = props;

  let content = (
    <section className="message">
      <h2 className="message__title">
        {title}
        <span className="message__title title__span">{subtitle}</span>
      </h2>
      <p className="message__text">
        {description}
      </p>
      <img className="message__icon scale" src={Close} alt="close" onClick={() => setClosed(true)}/>
    </section>
  );

  if(closed) { content = null }

  return content
}
