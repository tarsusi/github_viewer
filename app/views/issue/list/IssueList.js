import React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { getIssues } from '@services/issueService';
import { IssueCard } from '@components/issue-card/IssueCard';

type Props = NavigationScreenProps & {};

export class IssueList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Issue List'
  };

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    const { endpoint } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    if (endpoint) {
      getIssues(endpoint).then(({ error, message, issues }) => {
        if (error) {
          Alert.alert('Error', message);
        } else if (issues.length) {
          this.setState({ issues });
        } else {
          Alert.alert('Notification', 'There is no issues for this repository', [{ text: 'OK', onPress: goBack }]);
        }
      });
    } else {
      Alert.alert('Error', 'Please Go to the Repository Detail page', [
        { text: 'OK', onPress: goBack }
      ]);
    }
  }

  render() {
    const { issues } = this.state;

    return (
      <ScrollView style={styles.container}>
        {issues &&
          issues.map(({ id, state, number, title, createdAt, userName }) => (
            <IssueCard key={id} state={state} number={number} title={title} createdAt={createdAt} userName={userName} />
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
