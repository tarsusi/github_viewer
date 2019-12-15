import React from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { PullRequestCard } from '@components/pull-request-card/PullRequestCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';

type Props = NavigationScreenProps & {};

export class PullRequestList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Pull Request List'
  };

  componentDidMount() {
    const { endpoint } = this.props.navigation.state.params;
    const { actions } = this.props;

    if (endpoint) {
      actions.getPullRequests(endpoint);
    } else {
      Alert.alert('Error', 'Please Go to the Repositories page');
    }
  }

  render() {
    const { pullRequests, loading } = this.props;

    return (
      (loading && <AppIndicator />) || (
        <ScrollView style={styles.container}>
          {pullRequests && pullRequests.length === 0 ? (
            <Text style={styles.noPullRequest}>There is no any pull request for this repository</Text>
          ) : (
            pullRequests.map(({ id, state, number, title, createdAt, userName }) => (
              <PullRequestCard
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
  noPullRequest: {
    alignSelf: 'center',
  },
});
