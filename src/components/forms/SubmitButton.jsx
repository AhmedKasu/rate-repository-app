import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import Button from '../Button';

const styles = StyleSheet.create({
  container: {},
});

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.container}>
      <Button title={title} onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;
