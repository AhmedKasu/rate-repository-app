import { StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  button: { padding: 10 },
});

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  return (
    <>
      <RepositoryItem
        repository={repository}
        onButtonPress={() => Linking.openURL(repository.url)}
      />
    </>
  );
};

export default Repository;
