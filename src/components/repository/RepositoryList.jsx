import { FlatList, View, StyleSheet } from 'react-native';

import theme from '../../theme';
import useRepositories from '../../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.light,
  },
});
export default RepositoryList;
