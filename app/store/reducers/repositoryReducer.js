const initialState = {
  list: [],
  details: {},
  loading: true,
  isFinished: false,
  errorMessage: '',
};

export const CLEAR_REPOSITORIES = 'CLEAR_REPOSITORIES';
export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const GET_REPOSITORIES_FULFILLED = 'GET_REPOSITORIES_FULFILLED';
export const GET_REPOSITORIES_REJECTED = 'GET_REPOSITORIES_REJECTED';
export const GET_REPOSITORY_DETAILS = 'GET_REPOSITORY_DETAILS';
export const GET_REPOSITORY_DETAILS_FULFILLED = 'GET_REPOSITORY_DETAILS_FULFILLED';
export const GET_REPOSITORY_DETAILS_REJECTED = 'GET_REPOSITORY_DETAILS_REJECTED';

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
        list: [...state.list, ...action.payload],
        isFinished: action.payload && action.payload.length === 0,
        loading: action.loading,
      };
    case GET_REPOSITORIES_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case GET_REPOSITORY_DETAILS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_REPOSITORY_DETAILS_FULFILLED:
      return {
        ...state,
        details: action.payload,
        loading: action.loading,
      };
    case GET_REPOSITORY_DETAILS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case CLEAR_REPOSITORIES:
      return { ...initialState };
    default:
      return state;
  }
};

export default repositoryReducer;
