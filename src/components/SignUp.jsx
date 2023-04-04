import { StyleSheet } from 'react-native';

import * as yup from 'yup';

import useCreateUser from '../hooks/useCreateUser';

import ErrorMessage from './forms/ErrorMessage';
import FormikForm from './forms/FormikForm';
import FormikTextInput from './forms/FormikTextInput';
import HideKeyboard from './forms/HideKeyboard';
import SubmitButton from './forms/SubmitButton';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const signUpSchema = yup.object().shape({
  username: yup.string().required().min(1).max(30).label('Username'),
  password: yup.string().required().min(5).max(50).label('Password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const SignUp = () => {
  const [createUser, { error }] = useCreateUser();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      await createUser({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HideKeyboard style={styles.container}>
      <ErrorMessage error={error?.message} visible={error} />
      <FormikForm
        initialValues={{
          username: '',
          password: '',
          passwordConfirm: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput
          autoCorrect={false}
          autoCapitalize='none'
          name='password'
          placeholder='Password'
          secureTextEntry
        />
        <FormikTextInput
          autoCorrect={false}
          autoCapitalize='none'
          name='passwordConfirm'
          placeholder='Password confirmation'
          secureTextEntry
        />
        <SubmitButton title='Sign Up' />
      </FormikForm>
    </HideKeyboard>
  );
};

export default SignUp;
