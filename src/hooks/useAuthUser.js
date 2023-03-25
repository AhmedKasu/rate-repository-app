import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from '../graphql/queries';

const useAuthenticatedUser = () => {
  const { data, error, loading } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    user: data?.me,
    error,
    loading,
  };
};

export default useAuthenticatedUser;
