import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import How from './pages/How';
import PastTrials from './pages/PastTrials';

import './scss/main.scss';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path ='/how' component={How} />
        <Route path ='/pastTrials' component={PastTrials} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  );
}
