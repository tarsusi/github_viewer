import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import RepositoryListContainer from './views/repository/list/RepositoryContainer';
import RepositoryDetailsContainer from './views/repository/detail/RepositoryDetailsContainer';
import { IssueList } from './views/issue/list/IssueList';
import PullRequestListContainer from './views/pull-request/list/PullRequestListContainer';
import configureStore from './store/index';

const MainNavigator = createStackNavigator({
  RepositoryList: { screen: RepositoryListContainer },
  RepositoryDetails: { screen: RepositoryDetailsContainer },
  IssueList: { screen: IssueList },
  PullRequestList: { screen: PullRequestListContainer },
});

const App = createAppContainer(MainNavigator);

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
