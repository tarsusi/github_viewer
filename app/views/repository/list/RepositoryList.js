import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import { RepositoryCard } from '@components/repository-card/RepositoryCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';

type Props = NavigationScreenProps & {};

const USER_NAME = 'reactjs';

export class RepositoryList extends Component<Props> {
  static navigationOptions = {
    title: 'Repository List'
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.getRepositories(USER_NAME);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { repositories, loading } = this.props;

    return (
      (loading && <AppIndicator />) || (
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
  container: { backgroundColor: '#e6e9ed', flex: 1, padding: 24 }
});
