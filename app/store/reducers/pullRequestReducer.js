const initialState = {
  list: [],
  loading: true,
  errorMessage: '',
};

export const GET_PULL_REQUESTS = 'GET_PULL_REQUESTS';
export const GET_PULL_REQUESTS_FULFILLED = 'GET_PULL_REQUESTS_FULFILLED';
export const GET_PULL_REQUESTS_REJECTED = 'GET_PULL_REQUESTS_REJECTED';

const pullRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PULL_REQUESTS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PULL_REQUESTS_FULFILLED:
      return {
        ...state,
        list: action.payload,
        loading: action.loading,
      };
    case GET_PULL_REQUESTS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default pullRequestReducer;
