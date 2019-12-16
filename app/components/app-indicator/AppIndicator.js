import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const AppIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#4fc2e5" />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
