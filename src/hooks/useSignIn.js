import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE_USER } from '../graphql/mutations';
import { useAuthStorage } from './useAuthStorage';
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    if (data?.authenticate.accessToken) navigate('/');

    await authStorage.setAccessToken(data?.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
