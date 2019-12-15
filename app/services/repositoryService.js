import axios from 'axios';
import { get } from './baseApiService';

const BASE_URL = 'https://api.github.com';

export const getUserRepositories = (userName) => {
  return axios.get(`${BASE_URL}/users/${userName}/repos`);
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
