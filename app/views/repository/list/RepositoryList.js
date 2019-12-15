import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import { RepositoryCard } from '@components/repository-card/RepositoryCard';
import { getUserRepositories } from '@services/repositoryService';

type Props = NavigationScreenProps & {};

const USER_NAME = 'reactjs';

export class RepositoryList extends Component<Props> {
  static navigationOptions = {
    title: 'Repository List',
  };

  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    getUserRepositories(USER_NAME).then(({ repositories, error, message }) => {
      if (!error) {
        this.setState({
          repositories,
        });
      } else {
        Alert.alert('Error', message);
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { repositories } = this.state;

    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#e6e9ed', flex: 1, padding: 24 }
});
