import React, {Component} from "react";
import PropTypes from 'prop-types';

import SearchBarInput from "./components/SearchBarInput/SearchBarInput";
import LanguageDropdown from "./components/LanguageDropdown/LanguageDropdown";
import SortDropdown from "./components/SortDropdown/SortDropDown";

import './RepositorySearchBar.css';

class RepositorySearchBar extends Component {
    state = {
        searchQuery: '',
        language: 'php',
        sortBy: 'stars',
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const {onSearchSubmit} = this.props;
        onSearchSubmit({...this.state});
    };

    handleOnChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {searchQuery, language, sortBy} = this.state;
        return (
            <form
                className="repositories__search-form"
                onSubmit={this.handleOnSubmit}
            >
                <LanguageDropdown
                    name="language"
                    value={language}
                    onChange={this.handleOnChange}
                />
                <SortDropdown
                    name="sortBy"
                    value={sortBy}
                    onChange={this.handleOnChange}
                />
                <SearchBarInput
                    name="searchQuery"
                    value={searchQuery}
                    onChange={this.handleOnChange}
                />
                <button
                    className="repositories__search-button"
                    type="submit"
                >
                    Search
                </button>
            </form>
        );
    }
}

RepositorySearchBar.propTypes = {
    onSearchSubmit: PropTypes.func
};

export default RepositorySearchBar;
