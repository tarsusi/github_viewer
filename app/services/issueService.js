import { get } from './baseApiService';

export const getIssues = (issuesUrl) => {
  return get(issuesUrl).then(({ data: issues, error, message }) => {
    return {
      error,
      message,
      issues:
        issues &&
        issues.map(({ state, number, id, title, created_at, user: { login: userName } }) => ({
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
