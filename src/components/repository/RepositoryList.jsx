import { FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';

import useRepositories from '../../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

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

export default RepositoryList;
