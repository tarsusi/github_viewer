import { get } from './baseApiService';

export const getUserRepositories = (userName) => {
  return get(`https://api.github.com/users/${userName}/repos`).then(({ data: repositories, error, message }) => {
    return {
      error,
      message,
      repositories:
        repositories &&
        repositories.map(({ name, id, description, html_url: detailsEndpoint, language }) => ({
          description,
          detailsEndpoint,
          id,
          language,
          name,
        })),
    };
  });
};
