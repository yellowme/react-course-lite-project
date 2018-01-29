import * as contributorParser from './services/parsers/contributorParser';
import * as repositoryParser from './services/parsers/repositoryParser';

const GITHUB_API_URL = 'https://api.github.com/';

const addLanguageQuery = (language) => {
    return language ? `+language:${language}` : '';
};

const addSortOrder = (sortOrder) => {
    return sortOrder ? `&sort=${sortOrder}` : '';
};

//EMAIL USED TO SIGN ON GITHUB
const username = '';
//THE PASSWORD
const password = '';
const headers = new Headers();

headers.append('Authorization', `Basic ${window.btoa(`${username}:${password}`)}`);



const getFromAPI = (url) => {
    const encodedUrl = window.encodeURI(url);
    return fetch(encodedUrl,{
        method: 'GET',
        headers
    })
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

function getRepositoryURL(owner, repository) {
    const repoURI = `${owner}/${repository}`;
    return `${GITHUB_API_URL}repos/${repoURI}`;
}

export function getRepositoryContributors(owner, repository) {
    const url = `${getRepositoryURL(owner, repository)}/contributors`;
    return getFromAPI(url)
        .then(contributorsList => contributorsList.map(contributorParser.parse));
}

export function getRepository(owner, repository) {
    const url = getRepositoryURL(owner, repository);
    return getFromAPI(url)
        .then(repositoryParser.parse);
}

