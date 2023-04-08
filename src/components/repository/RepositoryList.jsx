import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';

import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

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
  searchQuery,
  onEndReach,
  onSearchQueryChange,
}) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderRepositoryHeader = useCallback(
    () => (
      <RepositoryListHeader
        pickerItems={orderPrinciples}
        pickerOnSelectItem={(item) => setSelectedOrder(item)}
        pickerSelectedItem={selectedOrder.label}
        searchQuery={searchQuery}
        onSearchQueryChange={(query) => onSearchQueryChange(query)}
      />
    ),
    [searchQuery]
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={renderRepositoryHeader()}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    ...selectedOrder.value,
    searchKeyword,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchQuery={searchQuery}
      onEndReach={onEndReach}
      onSearchQueryChange={(query) => setSearchQuery(query)}
    />
  );
};

export default RepositoryList;
