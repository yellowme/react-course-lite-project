import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Repositories from './Repositories/Repositories'
import RepositoryDetails from './RepositoryDetails/RepositoryDetails';

const AppRoutes = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={Repositories}/>
          <Route path="/:owner/:repository" component={RepositoryDetails}/>
      </Switch>
  </Router>
);

export default AppRoutes;