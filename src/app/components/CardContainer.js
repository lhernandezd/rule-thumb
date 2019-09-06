import React from 'react'
import Card from '../components/Card';

export default function CardContainer(props) {
  const { candidates, handleReload } = props;
  return (
    <section className="stars">
      <h2 className="stars__title">Votes</h2>
      {candidates.map(candidate =>
        <Card key={candidate.id} {...candidate} handleReload={handleReload}/>
      )}
    </section>
  )
}
