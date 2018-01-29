import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as githubClient from "../../../../services/githubClient/githubClient";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import Card, {CardItem, CardAvatar, CardDetails, CardLink} from "../../../../components/Card/Card";

import './RepositoryInformation.css';

class RepositoryInformation extends Component {
    state = {
        repository: null,
        loading: false,
    };

    componentDidMount() {
        const {owner, repository} = this.props;
        this.setState({loading: true});
        githubClient.getRepository(owner, repository)
            .then(repository => {
                this.setState({
                    repository,
                    loading: false
                });
            })
    }


    render() {
        const {repository, loading} = this.state;
        if (loading || !repository) {
            return <LoadingSpinner/>;
        }
        return (
            <div className="repository-details--information">
                <Card className="card--align-horizontal repository-details__card">
                    <CardAvatar imageSrc={repository.ownerAvatarUrl}/>
                    <CardDetails className="card__details--left-align">
                        <CardItem label="Name">{repository.name}</CardItem>
                        <CardItem label="Description">{repository.description}</CardItem>
                        <CardItem label="Stars">{repository.startGazersCount}</CardItem>
                        <CardItem label="Forks">{repository.forksCount}</CardItem>
                        <CardLink href={repository.githubPageLink}>Github Page</CardLink>
                    </CardDetails>
                </Card>
            </div>)
    }
}

RepositoryInformation.propTypes = {
    owner: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
};

export default RepositoryInformation;