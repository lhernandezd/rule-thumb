import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import CardContainer from '../components/CardContainer';
import { useHttpGet } from '../hooks/http';
import config from '../config.json'

export default function Home() {
  const [ reload, setReload ] = useState(1);
  const url = `${config.baseUrl}/candidates`;
  const [ candidates ] = useHttpGet(url, [reload]);

  const handleReload = () => {
    setReload(reload + 1);
  };
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
        <CardContainer candidates={candidates || []} handleReload={handleReload}/>
        <div className="stars__footer">
          <p className="stars__footer--text">
            Is there anyone else you would want us to add ?
          </p>
          <span className="stars__footer--link">Submit a Name</span>
        </div>
      </div>
    </Fragment>
  )
}
