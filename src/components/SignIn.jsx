import { StyleSheet, View } from 'react-native';

import ErrorMessage from './forms/ErrorMessage';
import FormikForm from './forms/FormikForm';
import FormikTextInput from './forms/FormikTextInput';
import HideKeyboard from './forms/HideKeyboard';
import SubmitButton from './forms/SubmitButton';

import useSignIn from '../hooks/useSignIn';

import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const logInSchema = yup.object().shape({
  username: yup.string().required().label('Username'),
  password: yup.string().required().label('Password'),
});

export const SignInContainer = ({ error, onSubmit }) => {
  return (
    <HideKeyboard>
      <FormikForm
        validationSchema={logInSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}>
        <View style={styles.container}>
          <ErrorMessage error={error?.message} visible={error} />
          <FormikTextInput
            autoCapitalize='none'
            name='username'
            placeholder='Username'
          />
          <FormikTextInput
            autoCorrect={false}
            autoCapitalize='none'
            name='password'
            placeholder='Password'
            secureTextEntry
          />
          <SubmitButton title='Sign In' />
        </View>
      </FormikForm>
    </HideKeyboard>
  );
};

const SignIn = () => {
  const [signIn, { error }] = useSignIn();

  const handleSubmit = async (values) => {
    try {
      await signIn(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer error={error} onSubmit={handleSubmit} />;
};

export default SignIn;
