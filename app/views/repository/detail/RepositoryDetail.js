import React from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type Props = NavigationScreenProps & {};

export class RepositoryDetail extends React.Component<Props> {
  static navigationOptions = {
    title: 'Repository Detail',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <>
        <Button
          title="Go to Repository Pull Requests"
          onPress={() => navigate('PullRequestList', { name: 'PullRequestList' })}
        />
        <Button title="Go to Repository Issues" onPress={() => navigate('IssueList', { name: 'IssueList' })} />
      </>
    );
  }
}
