import { StyleSheet, View } from 'react-native';

import FormikForm from './forms/FormikForm';
import FormikTextInput from './forms/FormikTextInput';
import HideKeyboard from './forms/HideKeyboard';
import SubmitButton from './forms/SubmitButton';

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
  return (
    <HideKeyboard>
      <FormikForm
        validationSchema={logInSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}>
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
