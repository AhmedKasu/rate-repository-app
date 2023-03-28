import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import useRepositories from '../../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          repository={item}
          onItemPress={() => navigate(`/${item.id}`)}
        />
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.light,
  },
});
export default RepositoryList;
