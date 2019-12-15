import React from 'react';
import { Text } from 'react-native';

export class IssueList extends React.Component {
  static navigationOptions = {
    title: 'Issue List',
  };

  render() {
    return (
      <>
        <Text>Issue Requests</Text>
      </>
    );
  }
}
