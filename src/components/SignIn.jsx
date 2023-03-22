import { StyleSheet, View } from 'react-native';

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

const SignIn = () => {
  const [signIn, { data }] = useSignIn();

  console.log(data);

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HideKeyboard>
      <FormikForm
        validationSchema={logInSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}>
        <View style={styles.container}>
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

export default SignIn;
