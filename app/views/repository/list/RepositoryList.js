import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

import { RepositoryCard } from '@components/repository-card/RepositoryCard';
import { AppIndicator } from '@components/app-indicator/AppIndicator';

type Props = NavigationScreenProps & {};

const USER_NAME = 'reactjs';

export class RepositoryList extends Component<Props> {
  static navigationOptions = {
    title: 'Repository List',
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
        const { actions } = this.props;
        actions.getRepositories(USER_NAME, this.state.page);
      },
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { actions, isFinished, loading, repositories } = this.props;
    const { page } = this.state;

    return (
      (loading && page === 1 && <AppIndicator />) || (
        <FlatList
          style={styles.container}
          data={repositories}
          renderItem={({ item: { name, id, description, language, detailsEndpoint } }) => (
            <RepositoryCard
              key={id}
              name={name}
              description={description}
              language={language}
              detailsEndpoint={detailsEndpoint}
              onClick={(endpoint) => {
                const { actions } = this.props;

                actions.clearRepositories();
                navigate('RepositoryDetails', { endpoint });
              }}
            />
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
                  actions.getRepositories(USER_NAME, this.state.page);
                },
              );
            }
          }}
          renderFooter={() => {
            if (!loading) return null;

            return <ActivityIndicator style={{ color: '#000' }} />;
          }}
        />
      )
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#e6e9ed', flex: 1, padding: 24 }
});
