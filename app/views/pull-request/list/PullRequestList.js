import React from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { PullRequestCard } from '@components/pull-request-card/PullRequestCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';
import { FlatList } from 'react-native-gesture-handler';

type Props = NavigationScreenProps & {};

export class PullRequestList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Pull Request List'
  };

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', this.onPageOpened);
  }

  onPageOpened = () => {
    this.setState(
      {
        page: 1,
      },
      () => {
        const { endpoint } = this.props.navigation.state.params;
        const { actions } = this.props;
        const { page } = this.state;

        if (endpoint) {
          actions.getPullRequests(endpoint, page);
        } else {
          Alert.alert('Error', 'Please Go to the Repositories page');
        }
      },
    );
  };

  render() {
    const { actions, isFinished, loading, pullRequests } = this.props;
    const { page } = this.state;

    return (
      (loading && page === 1 && <AppIndicator />) ||
      (pullRequests && pullRequests.length === 0 ? (
        <Text style={styles.noPullRequest}>There is no any pull request for this repository</Text>
      ) : (
        <FlatList
          style={styles.container}
          data={pullRequests}
          renderItem={({ item: { state, number, title, createdAt, userName } }) => (
            <PullRequestCard state={state} number={number} title={title} createdAt={createdAt} userName={userName} />
          )}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.3}
          onEndReached={() => {
            if (!loading && !isFinished) {
              this.setState(
                ({ page }) => ({
                  page: page + 1,
                }),
                () => {
                  const { endpoint } = this.props.navigation.state.params;
                  actions.getPullRequests(endpoint, page);
                },
              );
            }
          }}
          renderFooter={() => {
            if (!loading) return null;

            return <ActivityIndicator style={{ color: '#000' }} />;
          }}
        />
      ))
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
