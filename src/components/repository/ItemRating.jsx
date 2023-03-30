import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 70 / 2,
    borderWidth: 3,
    borderColor: theme.colors.steelBlue,
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
});
const ItemRating = ({ rating, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text color='steelBlue' fontSize='heading' fontWeight='bold'>
        {rating}
      </Text>
    </View>
  );
};

export default ItemRating;
