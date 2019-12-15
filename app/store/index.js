import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import issueReducer from '@store/reducers/issueReducer';
import repositoryReducer from '@store/reducers/repositoryReducer';
import pullRequestReducer from '@store/reducers/pullRequestReducer';

const rootReducer = combineReducers({
  issue: issueReducer,
  pullRequest: pullRequestReducer,
  repository: repositoryReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
