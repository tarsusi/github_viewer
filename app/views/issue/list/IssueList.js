import React from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

import { IssueCard } from '@components/issue-card/IssueCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';

type Props = NavigationScreenProps & {};

export class IssueList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Issue List'
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
          actions.getIssues(endpoint, page);
        } else {
          Alert.alert('Error', 'Please Go to the Repositories page');
        }
      },
    );
  };

  render() {
    const { endpoint } = this.props.navigation.state.params;
    const { actions, isFinished, loading, issues } = this.props;
    const { page } = this.state;

    return (
      (loading && page === 1 && <AppIndicator />) ||
      (issues && issues.length === 0 ? (
        <Text style={styles.noIssue}>There is no any issue for this repository</Text>
      ) : (
        <FlatList
          style={styles.container}
          data={issues}
          renderItem={({ item: { state, number, title, createdAt, userName } }) => (
            <IssueCard state={state} number={number} title={title} createdAt={createdAt} userName={userName} />
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
                  actions.getIssues(endpoint, page);
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
  noIssue: {
    alignSelf: 'center',
  },
});
