import React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { getPullRequests } from '../../../services/pullRequestService';
import { PullRequestCard } from '../../../components/pull-request-card/PullRequestCard';

type Props = NavigationScreenProps & {};

export class PullRequestList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Pull Request List'
  };

  constructor(props) {
    super(props);

    this.state = {
      pullRequests: [],
    };
  }

  componentDidMount() {
    const { endpoint } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    if (endpoint) {
      getPullRequests(endpoint).then(({ error, message, pullRequests }) => {
        if (error) {
          Alert.alert('Error', message);
        } else if (pullRequests.length) {
          this.setState({ pullRequests });
        } else {
          Alert.alert('Notification', 'There is no pull requests for this repository', [
            { text: 'OK', onPress: goBack },
          ]);
        }
      });
    } else {
      Alert.alert('Error', 'Please Go to the Repositories page');
    }
  }

  render() {
    const { pullRequests } = this.state;

    return (
      <ScrollView style={styles.container}>
        {pullRequests &&
          pullRequests.map(({ id, state, number, title, createdAt, userName }) => (
            <PullRequestCard
              key={id}
              state={state}
              number={number}
              title={title}
              createdAt={createdAt}
              userName={userName}
            />
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e9ed',
    flex: 1,
    padding: 24,
  },
});
