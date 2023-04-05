import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';

import useRepositories from '../../hooks/useRepositories';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import Picker from '../Picker';

const orderPrinciples = [
  {
    label: 'Latest repositories',
    value: {
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',
    },
  },
  {
    label: 'Highest Rated Repositories',
    value: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
  },
  {
    label: 'Lowest Rated Repositories',
    value: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    },
  },
];

export const RepositoryListContainer = ({
  repositories,
  selectedOrder,
  setSelectedOrder,
}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <Picker
          items={orderPrinciples}
          onSelectItem={(item) => setSelectedOrder(item)}
          selectedItem={selectedOrder.label}
        />
      )}
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
  const [selectedOrder, setSelectedOrder] = useState(orderPrinciples[0]);
  const { repositories } = useRepositories(selectedOrder.value);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
