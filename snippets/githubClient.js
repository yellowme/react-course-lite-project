import * as contributorParser from './parsers/contributorParser';
import * as repositoryParser from './parsers/repositoryParser';

const GITHUB_API_URL = 'https://api.github.com/';

const addLanguageQuery = (language) => {
    return language ? `+language:${language}` : '';
};

const addSortOrder = (sortOrder) => {
    return sortOrder ? `&sort=${sortOrder}` : '';
};

const getFromAPI = (url) => {
    const encodedUrl = window.encodeURI(url);
    return fetch(encodedUrl)
        .then(response => response.json())
};

export function getRepositories(searchQuery = '', language = '', sortBy = '') {
    const url = [
        `${GITHUB_API_URL}search/repositories?`,
        `q=${searchQuery}${addLanguageQuery(language)}`,
        addSortOrder(sortBy),
        '&order=desc&type=Repositories',
    ].join('');

    return getFromAPI(url)
        .then(data => data.items)
        .then(repositoryList => repositoryList.map(repositoryParser.parse));
}

export function getRepositoryContributors(owner, repository) {
    const repoURI = `${owner}/${repository}`;
    const url = `${GITHUB_API_URL}repos/${repoURI}/contributors`;
    return getFromAPI(url)
        .then(contributorsList => contributorsList.map(contributorParser.parse));
}

export function getRepository(owner, repository) {
    const repoURI = `${owner}/${repository}`;
    const url = `${GITHUB_API_URL}repos/${repoURI}`;
    return getFromAPI(url)
        .then(repositoryParser.parse);
}

