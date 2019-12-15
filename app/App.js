import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { RepositoryList } from './views/repository/list/RepositoryList';
import { RepositoryDetail } from './views/repository/detail/RepositoryDetail';
import { IssueList } from './views/issue/list/IssueList';
import { PullRequestList } from './views/pull-request/list/PullRequestList';

const MainNavigator = createStackNavigator({
  RepositoryList: { screen: RepositoryList },
  RepositoryDetail: { screen: RepositoryDetail },
  IssueList: { screen: IssueList },
  PullRequestList: { screen: PullRequestList },
});

const App = createAppContainer(MainNavigator);

export default App;
