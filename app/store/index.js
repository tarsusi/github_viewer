import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import repositoryReducer from '@store/reducers/repositoryReducer';
import pullRequestReducer from '@store/reducers/pullRequestReducer';

const rootReducer = combineReducers({
  repository: repositoryReducer,
  pullRequest: pullRequestReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
