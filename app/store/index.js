import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import repositoryReducer from '@store/reducers/repositoryReducer';

const rootReducer = combineReducers({
  repository: repositoryReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
