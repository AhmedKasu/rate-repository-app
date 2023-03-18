import { StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 70,
    justifyContent: 'center',
    marginVertical: 10,
  },
});

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text color='white' fontSize='heading' fontWeight='bold'>
        {title}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
