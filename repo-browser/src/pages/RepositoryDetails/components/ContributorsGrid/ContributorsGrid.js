import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "../../../../components/Grid/Grid";
import ContributorCard from "./components/ContributorCard/ContributorCard";
import * as githubClient from "../../../../services/githubClient/githubClient";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";


class ContributorsGrid extends Component {
    state = {
        contributorsList: [],
        loading: false,
    };

    componentDidMount() {
        const {owner, repository} = this.props;
        this.setState({loading: true});
        githubClient.getRepositoryContributors(owner, repository)
            .then(contributorsList => {
                this.setState({
                    contributorsList,
                    loading: false
                });
            })
    }

    render() {
        const {contributorsList, loading} = this.state;
        if (loading) {
            return (<LoadingSpinner/>);
        }

        return (
            <Grid>
                {contributorsList.map(contributor => (
                    <ContributorCard
                        key={contributor.loginName}
                        contributor={contributor}
                    />))}
            </Grid>
        )
    }
}

ContributorsGrid.propTypes = {
    owner: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
};

export default ContributorsGrid;