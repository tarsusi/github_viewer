import React from 'react';
import { Text } from 'react-native';

export class PullRequestList extends React.Component {
  static navigationOptions = {
    title: 'Pull Request List',
  };

  render() {
    return (
      <>
        <Text>Pull Requests</Text>
      </>
    );
  }
}
