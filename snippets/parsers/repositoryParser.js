export function parse(repository) {
    const {
        id,
        name,
        full_name: repoUrl,
        owner: {avatar_url: ownerAvatarUrl},
        stargazers_count: startGazersCount,
        forks_count: forksCount,
        description,
        html_url: githubPageLink
    } = repository;

    return {
        id,
        name,
        ownerAvatarUrl,
        repoUrl,
        startGazersCount,
        forksCount,
        description,
        githubPageLink
    };
};