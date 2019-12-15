import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import { RepositoryCard } from '@components/repository-card/RepositoryCard';

type Props = NavigationScreenProps & {};

const USER_NAME = 'reactjs';

export class RepositoryList extends Component<Props> {
  static navigationOptions = {
    title: 'Repository List',
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.getRepositories(USER_NAME);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { repositories, loading } = this.props;

    return (
      (loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4fc2e5" />
        </View>
      )) || (
        <ScrollView style={styles.container}>
          {repositories &&
            repositories.map(({ name, id, description, language, detailsEndpoint }) => (
              <RepositoryCard
                key={id}
                name={name}
                description={description}
                language={language}
                detailsEndpoint={detailsEndpoint}
                onClick={(endpoint) => navigate('RepositoryDetails', { endpoint })}
              />
            ))}
        </ScrollView>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#e6e9ed', flex: 1, padding: 24 },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
