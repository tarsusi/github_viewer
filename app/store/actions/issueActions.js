import axios from 'axios';

import { CLEAR_ISSUES, GET_ISSUES, GET_ISSUES_FULFILLED, GET_ISSUES_REJECTED } from '@store/reducers/issueReducer';

const PAGE_SIZE = 15;

export const clearIssues = () => {
  return {
    type: CLEAR_ISSUES,
  };
};

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

export const getIssues = (issueUrl, page) => {
  return async (dispatch) => {
    try {
      dispatch(getIssuesLoading(true));
      const { data: issues } = await axios.get(`${issueUrl}?per_page=${PAGE_SIZE}&page=${page}`);

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
