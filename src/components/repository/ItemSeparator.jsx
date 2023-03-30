import { View, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    backgroundColor: theme.colors.light,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator;
