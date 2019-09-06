import React, { Fragment } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import CardContainer from '../components/CardContainer';
import { useHttpGet } from '../hooks/http';
import config from '../config.json'

export default function Home() {
  const url = `${config.baseUrl}/candidates`;
  const [ candidates ] = useHttpGet(url, []);
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Message 
          title='Speak out. Be heard.'
          subtitle='Be counted'
          description={`Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It's easy: You share your
          opinion, we analyze and put the data in a public report.`}
        />
        <CardContainer candidates={candidates || []}/>
      </div>
    </Fragment>
  )
}
