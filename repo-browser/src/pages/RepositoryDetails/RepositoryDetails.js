import React from 'react';
import PropTypes from 'prop-types';

import ContributorsGrid from "./components/ContributorsGrid/ContributorsGrid";
import RepositoryInformation from "./components/RepositoryInformation/RepositoryInformation";
import {NavLink} from "react-router-dom";
import './RepositoryDetails.css';

const RepositoryDetails = (props) => {
    const {match: {params: {owner, repository}}} = props;
    return (
        <div className="repository-details">
            <div className="repository-details--nav-bar">
                <NavLink
                    className="repository-details__home-link"
                    to='/'
                >
                    Home
                </NavLink>
            </div>
            <RepositoryInformation owner={owner} repository={repository}/>
            <div className="repository__contributors-title">
                <h1>Contributors</h1>
            </div>
            <ContributorsGrid owner={owner} repository={repository}/>
        </div>
    );
};

RepositoryDetails.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default RepositoryDetails;