import React from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { IssueCard } from '@components/issue-card/IssueCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';

type Props = NavigationScreenProps & {};

export class IssueList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Issue List',
  };

  componentDidMount() {
    const { endpoint } = this.props.navigation.state.params;
    const { actions } = this.props;

    if (endpoint) {
      actions.getIssues(endpoint);
    } else {
      Alert.alert('Error', 'Please Go to the Repositories page');
    }
  }

  render() {
    const { issues, loading } = this.props;

    return (
      (loading && <AppIndicator />) || (
        <ScrollView style={styles.container}>
          {issues && issues.length === 0 ? (
            <Text style={styles.noIssue}>There is no any issue for this repository</Text>
          ) : (
            issues.map(({ id, state, number, title, createdAt, userName }) => (
              <IssueCard
                key={id}
                state={state}
                number={number}
                title={title}
                createdAt={createdAt}
                userName={userName}
              />
            ))
          )}
        </ScrollView>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e9ed',
    flex: 1,
    padding: 24,
  },
  noIssue: {
    alignSelf: 'center'
  },
});
