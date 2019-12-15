import { get } from './baseApiService';

export const getUserRepositories = (userName) => {
  return get(`https://api.github.com/users/${userName}/repos`).then(({ data: repositories, error, message }) => {
    return {
      error,
      message,
      repositories:
        repositories &&
        repositories.map(({ name, id, description, url: detailsEndpoint, language }) => ({
          description,
          detailsEndpoint,
          id,
          language,
          name,
        })),
    };
  });
};

export const getRepositoryDetails = (repositoryUrl) => {
  return get(repositoryUrl).then(({ data: details, error, message }) => {
    return {
      error,
      message,
      details:
        (details && {
          name: details.name,
          description: details.description,
          htmlUrl: details.html_url,
          createdAt: details.created_at,
          stargazers: details.stargazers_count,
          watchers: details.watchers_count,
          forks: details.forks,
          issues: details.open_issues,
          subscribers: details.subscribers_count,
        }) ||
        null,
    };
  });
};
