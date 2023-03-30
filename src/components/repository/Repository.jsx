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
  const { reviews } = useReviews(id);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ItemReview review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
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
