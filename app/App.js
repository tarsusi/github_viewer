import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { RepositoryList } from './views/repository/list/RepositoryList';
import { RepositoryDetails } from './views/repository/detail/RepositoryDetails';
import { IssueList } from './views/issue/list/IssueList';
import { PullRequestList } from './views/pull-request/list/PullRequestList';

const MainNavigator = createStackNavigator({
  RepositoryList: { screen: RepositoryList },
  RepositoryDetails: { screen: RepositoryDetails },
  IssueList: { screen: IssueList },
  PullRequestList: { screen: PullRequestList },
});

const App = createAppContainer(MainNavigator);

export default App;
