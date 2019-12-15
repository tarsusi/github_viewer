import axios from 'axios';

import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_FULFILLED,
  GET_REPOSITORIES_REJECTED,
  GET_REPOSITORY_DETAILS,
  GET_REPOSITORY_DETAILS_FULFILLED,
  GET_REPOSITORY_DETAILS_REJECTED,
} from '@store/reducers/repositoryReducer';

const BASE_URL = 'https://api.github.com';

export const getRepositoriesLoading = (bool) => {
  return {
    type: GET_REPOSITORIES,
    payload: bool,
  };
};

export const getRepositoriesFulfilled = (data) => {
  return {
    type: GET_REPOSITORIES_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getRepositoriesRejected = (error) => {
  return {
    type: GET_REPOSITORIES_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getRepositories = (userName) => {
  return async (dispatch) => {
    try {
      dispatch(getRepositoriesLoading(true));

      const { data: repositories } = await axios.get(`${BASE_URL}/users/${userName}/repos`);

      dispatch(
        getRepositoriesFulfilled(
          repositories.map(({ name, id, description, url: detailsEndpoint, language }) => ({
            description,
            detailsEndpoint,
            id,
            language,
            name,
          })),
        ),
      );
    } catch (error) {
      dispatch(getRepositoriesRejected(error));
    }
  };
};

export const getRepositoryDetailsLoading = (bool) => {
  return {
    type: GET_REPOSITORY_DETAILS,
    payload: bool,
  };
};

export const getRepositoryDetailsFulfilled = (data) => {
  return {
    type: GET_REPOSITORY_DETAILS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getRepositoryDetailsRejected = (error) => {
  return {
    type: GET_REPOSITORY_DETAILS_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getRepositoryDetails = (repositoryUrl) => {
  return async (dispatch) => {
    try {
      dispatch(getRepositoryDetailsLoading(true));

      const { data: details } = await axios.get(repositoryUrl);

      dispatch(
        getRepositoryDetailsFulfilled({
          name: details.name,
          description: details.description,
          htmlUrl: details.html_url,
          createdAt: details.created_at,
          stargazers: details.stargazers_count,
          watchers: details.watchers_count,
          forks: details.forks,
          issues: details.open_issues,
          subscribers: details.subscribers_count,
        }),
      );
    } catch (error) {
      dispatch(getRepositoryDetailsRejected(error));
    }
  };
};
