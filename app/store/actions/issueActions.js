import axios from 'axios';

import { GET_ISSUES, GET_ISSUES_FULFILLED, GET_ISSUES_REJECTED } from '@store/reducers/issueReducer';

export const getIssuesLoading = (bool) => {
  return {
    type: GET_ISSUES,
    payload: bool,
  };
};

export const getIssuesFulfilled = (data) => {
  return {
    type: GET_ISSUES_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getIssuesRejected = (error) => {
  return {
    type: GET_ISSUES_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getIssues = (pullRequestUrl) => {
  return async (dispatch) => {
    try {
      dispatch(getIssuesLoading(true));
      const { data: issues } = await axios.get(pullRequestUrl);

      dispatch(
        getIssuesFulfilled(
          issues.map(({ state, number, id, title, created_at, user: { login: userName } }) => ({
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
      dispatch(getIssuesRejected(error));
    }
  };
};
