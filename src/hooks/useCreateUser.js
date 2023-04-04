import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();

  const createUser = async (user) => {
    const { data } = await mutate({ variables: { user } });

    if (data) await signIn(user);
  };

  return [createUser, result];
};

export default useCreateUser;
