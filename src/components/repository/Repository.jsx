import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';

import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';

import RepositoryItem from './RepositoryItem';
import ItemReview from './ItemReview';
import ItemSeparator from './ItemSeparator';

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const { getReviews } = useReviews();
  const { reviews, fetchMore } = getReviews({ repositoryId: id, first: 2 });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ItemReview review={{ ...item.node, title: item.node.user.username }} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem
            repository={repository}
            onButtonPress={() => Linking.openURL(repository.url)}
          />
          <ItemSeparator />
        </>
      )}
    />
  );
};

export default Repository;
