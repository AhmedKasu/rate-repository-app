import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import ErrorMessage from './ErrorMessage';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

const FormikTextInput = ({ type = 'string', name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const parseValue = (value) => {
    if (type === 'number') return parseInt(value);
    return value;
  };

  return (
    <>
      <TextInput
        error={showError}
        onChangeText={(value) => helpers.setValue(parseValue(value))}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      <ErrorMessage
        style={styles.errorText}
        error={meta.error}
        visible={showError}
      />
    </>
  );
};

export default FormikTextInput;
