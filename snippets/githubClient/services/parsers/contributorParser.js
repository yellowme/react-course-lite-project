export function parse(contributor) {
    const {
        login: loginName,
        avatar_url: avatarUrl,
        html_url: githubPageLink
    } = contributor;

    return {
        loginName,
        avatarUrl,
        githubPageLink,
    }
};
