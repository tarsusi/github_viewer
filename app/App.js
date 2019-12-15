import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import RepositoryListContainer from './views/repository/list/RepositoryContainer';
import { RepositoryDetails } from './views/repository/detail/RepositoryDetails';
import { IssueList } from './views/issue/list/IssueList';
import { PullRequestList } from './views/pull-request/list/PullRequestList';
import configureStore from './store/index';

const MainNavigator = createStackNavigator({
  RepositoryList: { screen: RepositoryListContainer },
  RepositoryDetails: { screen: RepositoryDetails },
  IssueList: { screen: IssueList },
  PullRequestList: { screen: PullRequestList },
});

const App = createAppContainer(MainNavigator);

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
