import React, {Component} from 'react';
import * as githubClient from "../../services/githubClient/githubClient";
import './Repositories.css';
import RepositoriesGrid from "./components/RepositoriesGrid/RepositoriesGrid";
import RepositorySearchBar from "./components/RepositorySearchBar/RepositorySearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class Repositories extends Component {
    state = {
        repositoriesList: [],
        loading: true
    };

    componentDidMount() {
        this.obtainRepositories();
    }


    obtainRepositories = ({searchQuery = '', language = 'php', sortBy = 'stars'} = {}) => {
        this.setState({loading: true});
        return githubClient.getRepositories(searchQuery, language, sortBy)
            .then(repositoriesList => {
                this.setState({
                    repositoriesList,
                    loading: false
                });
            });
    };


    handleSearchSubmit = (filterParameters) => {
        this.obtainRepositories(filterParameters);
    };

    render() {
        const {repositoriesList, loading} = this.state;
        return (
            <div className="repositories">
                <RepositorySearchBar onSearchSubmit={this.handleSearchSubmit}/>
                <div className="repositories__title">
                    <h1>Repositories</h1>
                </div>
                {loading ?
                    (<LoadingSpinner/>)
                    :
                    (<RepositoriesGrid repositoriesList={repositoriesList}/>)
                }
            </div>
        );
    }
}

export default Repositories;