const initialState = {
  list: [],
  loading: true,
  errorMessage: '',
};

export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const GET_REPOSITORIES_FULFILLED = 'GET_REPOSITORIES_FULFILLED';
export const GET_REPOSITORIES_REJECTED = 'GET_REPOSITORIES_REJECTED';

const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_REPOSITORIES_FULFILLED:
      return {
        ...state,
        list: action.payload,
        loading: action.loading,
      };
    case GET_REPOSITORIES_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default repositoryReducer;
