import React from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { RepositoryDetailRow } from '@components/repository-detail-row/RepositoryDetailRow';

type Props = NavigationScreenProps & {};

export class RepositoryDetails extends React.Component<Props> {
  static navigationOptions = {
    title: 'Repository Details',
  };

  componentDidMount() {
    const { endpoint } = this.props.navigation.state.params;
    const { actions } = this.props;

    if (endpoint) {
      actions.getRepositoryDetails(endpoint);
    } else {
      Alert.alert('Error', 'Please Go to the Repositories page');
    }
  }

  toDetails = (details) => {
    return (
      (details && [
        { label: 'Name', value: details.name },
        { label: 'Description', value: details.description },
        {
          label: 'Created At',
          value: new Date(details.createdAt).toLocaleDateString(),
        },
        { label: 'Stargazers', value: details.stargazers },
        { label: 'Watchers', value: details.watchers },
        { label: 'Forks', value: details.forks },
        { label: 'Issues', value: details.issues },
        { label: 'Subscribers', value: details.subscribers }
      ]) ||
      []
    );
  };

  render() {
    const { loading, details } = this.props;
    const { navigate } = this.props.navigation;
    const { endpoint } = this.props.navigation.state.params;

    return (
      (loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4fc2e5" />
        </View>
      )) || (
        <View style={styles.detailsContainer}>
          {details && (
            <>
              {this.toDetails(details).map(({ label, value }) => (
                <RepositoryDetailRow key={label} label={label} value={value} />
              ))}
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    navigate('PullRequestList', {
                      endpoint: `${endpoint}/pulls`,
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Go to Pull Requests</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    navigate('IssueList', { endpoint: `${endpoint}/issues` });
                  }}
                >
                  <Text style={styles.buttonText}>Go to Issues</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  detailsContainer: { flex: 1, backgroundColor: '#46cfb0', padding: 24 },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: '#4fc2e5',
    marginLeft: 12,
  },
  buttonText: {
    color: 'white',
    padding: 8,
  },
});
