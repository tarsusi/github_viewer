import React from 'react';
import { Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type Props = NavigationScreenProps & {};

export class RepositoryList extends React.Component<Props> {
  static navigationOptions = {
    title: 'RepositoryList',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title="Go to Repository Details"
        onPress={() => navigate('RepositoryDetail', { name: 'RepositoryName' })}
      />
    );
  }
}
