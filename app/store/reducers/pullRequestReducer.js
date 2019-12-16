const initialState = {
  errorMessage: '',
  isFinished: false,
  list: [],
  loading: true,
};

export const CLEAR_PULL_REQUESTS = 'CLEAR_PULL_REQUESTS';
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
        list: [...state.list, ...action.payload],
        isFinished: action.payload && action.payload.length === 0,
        loading: action.loading,
      };
    case GET_PULL_REQUESTS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case CLEAR_PULL_REQUESTS:
      return { ...initialState };
    default:
      return state;
  }
};

export default pullRequestReducer;
