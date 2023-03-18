import { StyleSheet, View } from 'react-native';

import FormikForm from './forms/FormikForm';
import FormikTextInput from './forms/FormikTextInput';
import SubmitButton from './forms/SubmitButton';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const SignIn = () => {
  return (
    <FormikForm
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => console.log(values)}>
      <View style={styles.container}>
        <FormikTextInput
          autoCapitalize='none'
          keyboardType='email-address'
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
  );
};

export default SignIn;
