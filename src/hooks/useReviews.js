import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId },
  });

  return {
    reviews: data?.repository.reviews.edges,
    error,
    loading,
  };
};

export default useReviews;
