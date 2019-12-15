import { get } from './baseApiService';

export const getPullRequests = (pullRequestsUrl) => {
  return get(pullRequestsUrl).then(({ data: pullRequests, error, message }) => {
    return {
      error,
      message,
      pullRequests:
        pullRequests &&
        pullRequests.map(({ state, number, id, title, created_at, user: { login: userName } }) => ({
          state,
          number,
          id,
          title,
          createdAt: created_at,
          userName,
        })),
    };
  });
};
