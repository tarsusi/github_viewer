import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type Props = {
  description: string,
  detailsEndpoint: string,
  language: string,
  name: string,
  onClick: () => any,
};

export const RepositoryCard = ({ description, detailsEndpoint, language, name, onClick }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footerContainer}>
        <Text style={styles.language}>Language: {language}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => onClick(detailsEndpoint)}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ed5565',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    color: '#ffcd69',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  description: { color: '#f5f7fa' },
  footerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginTop: 12,
  },
  language: { flex: 5, color: '#f5f7fa' },
  buttonContainer: { borderRadius: 8, backgroundColor: '#4fc2e5' },
  buttonText: {
    color: 'white',
    padding: 8,
  },
});
