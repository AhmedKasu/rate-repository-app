import { StyleSheet, View } from 'react-native';

import theme from '../../theme';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
});

const ItemLanguageTab = ({ title }) => {
  const width = `${(title.length / 3) * 12}%`;
  return (
    <View style={[styles.container, { width }]}>
      <Text color='white' fontSize='heading' fontWeight='bold'>
        {title}
      </Text>
    </View>
  );
};

export default ItemLanguageTab;