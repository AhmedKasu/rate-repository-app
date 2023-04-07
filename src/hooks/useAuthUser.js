import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useAuthenticatedUser = (includeReviews = false) => {
  const { data, error, loading, refetch } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  });

  return {
    user: data?.me,
    error,
    loading,
    refetch,
  };
};

export default useAuthenticatedUser;
