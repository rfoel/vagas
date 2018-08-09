import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Jobs from '../components/Jobs';

const Router = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/vagas" component={Jobs} />
  </React.Fragment>
);

export default Router;
