import { getUserRepositories } from '@services/repositoryService';
import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_FULFILLED,
  GET_REPOSITORIES_REJECTED,
} from '@store/reducers/repositoryReducer';

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

      const { data: repositories } = await getUserRepositories(userName);

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
