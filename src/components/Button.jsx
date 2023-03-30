import { StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginVertical: 10,
  },
});

const Button = ({ height = 70, style, title, onPress, visible = true }) => {
  if (visible)
    return (
      <View style={style}>
        <TouchableOpacity style={[styles.button, { height }]} onPress={onPress}>
          <Text color='white' fontSize='heading' fontWeight='bold'>
            {title}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
};

export default Button;
