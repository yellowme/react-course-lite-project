import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Repositories from "../../pages/Repositories/Repositories";
import RepositoryDetails from "../../pages/RepositoryDetails/RepositoryDetails";


const AppRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Repositories}/>
            <Route path="/:owner/:repository" component={RepositoryDetails}/>
        </Switch>
    </Router>
);

export default AppRoutes;