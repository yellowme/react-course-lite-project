import React from 'react';
import PropTypes from 'prop-types';
import Grid from "../../../../components/Grid/Grid";
import RepositoryCard from './components/RepositoryCard/RepositoryCard';
import './RepositoriesGrid.css';

const RepositoriesGrid = ({repositoriesList}) => (
    <Grid>
        {repositoriesList.map(repository => (
            <RepositoryCard
                key={repository.id}
                repository={repository}
            />
        ))}
    </Grid>
);

RepositoriesGrid.propTypes = {
    repositoriesList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
};

export default RepositoriesGrid;