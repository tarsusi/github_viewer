import axios from 'axios';

import {
  GET_PULL_REQUESTS,
  GET_PULL_REQUESTS_FULFILLED,
  GET_PULL_REQUESTS_REJECTED,
} from '@store/reducers/pullRequestReducer';

export const getPullRequestsLoading = (bool) => {
  return {
    type: GET_PULL_REQUESTS,
    payload: bool,
  };
};

export const getPullRequestsFulfilled = (data) => {
  return {
    type: GET_PULL_REQUESTS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getPullRequestsRejected = (error) => {
  return {
    type: GET_PULL_REQUESTS_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getPullRequests = (pullRequestUrl) => {
  return async (dispatch) => {
    try {
      dispatch(getPullRequestsLoading(true));
      const { data: pullRequests } = await axios.get(pullRequestUrl);

      dispatch(
        getPullRequestsFulfilled(
          pullRequests.map(({ state, number, id, title, created_at, user: { login: userName } }) => ({
            state,
            number,
            id,
            title,
            createdAt: created_at,
            userName,
          })),
        ),
      );
    } catch (error) {
      dispatch(getPullRequestsRejected(error));
    }
  };
};
