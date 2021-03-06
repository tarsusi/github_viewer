import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { capitalizeWord } from '@utils/stringUtil';

type Props = {
  createdAt: string,
  number: number,
  state: string,
  title: string,
  userName: string,
};

export const PullRequestCard = ({ createdAt, number, state, title, userName }: Props) => {
  const generatedDescription = `#${number} opened on ${new Date(createdAt).toDateString()} by ${userName}`;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={state === 'open' ? styles.openState : styles.closedState}>
          {capitalizeWord(state)}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.description}>{generatedDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  openState: {
    color: '#46cfb0',
    marginRight: 4,
  },
  closedState: {
    color: '#ed5565',
  },
  title: {
    color: '#ffcd69',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#4b8ad6',
    fontSize: 14,
  },
});
