import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string,
  value: string | number,
};

export const RepositoryDetailRow = ({ label, value }: Props) => {
  return (
    <View key={label} style={styles.container}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rowLabel: {
    color: '#ffcd69',
    fontWeight: 'bold',
  },
  rowValue: {
    color: '#f5f7fa',
    flex: 1,
    flexWrap: 'wrap'
    textAlign: 'right',
  },
});
