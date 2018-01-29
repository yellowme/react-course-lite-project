import React from 'react';
import PropTypes from 'prop-types';
import Grid from "../../../../components/Grid/Grid";
import RepositoryCard from './components/RepositoryCard/RepositoryCard';
import './RepositoriesGrid.css';
import {NavLink} from 'react-router-dom';

const RepositoriesGrid = ({repositoriesList}) => (
    <Grid>
        {repositoriesList.map(repository => (
            <NavLink
                className="repositories__link"
                to={repository.repoUrl}
                key={repository.id}
            >
                <RepositoryCard
                    repository={repository}
                />
            </NavLink>
        ))}
    </Grid>
);

RepositoriesGrid.propTypes = {
    repositoriesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        repoUrl: PropTypes.string.isRequired
    }))
};

export default RepositoriesGrid;