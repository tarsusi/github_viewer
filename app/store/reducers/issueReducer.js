const initialState = {
  errorMessage: '',
  isFinished: false,
  list: [],
  loading: true,
};

export const CLEAR_ISSUES = 'CLEAR_ISSUES';
export const GET_ISSUES = 'GET_ISSUES';
export const GET_ISSUES_FULFILLED = 'GET_ISSUES_FULFILLED';
export const GET_ISSUES_REJECTED = 'GET_ISSUES_REJECTED';

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ISSUES_FULFILLED:
      return {
        ...state,
        list: [...state.list, ...action.payload],
        isFinished: action.payload && action.payload.length === 0,
        loading: action.loading,
      };
    case GET_ISSUES_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case CLEAR_ISSUES:
      return { ...initialState };
    default:
      return state;
  }
};

export default issueReducer;
