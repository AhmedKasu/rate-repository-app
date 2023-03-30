import { StyleSheet, View } from 'react-native';

import theme from '../../theme';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    height: 37,
    justifyContent: 'center',
  },
});

const ItemLanguageTab = ({ title, style }) => {
  const width = `${(title.length / 3) * 12}%`;
  return (
    <View testID='languageTab' style={[styles.container, style, { width }]}>
      <Text color='white' fontSize='subheading' fontWeight='bold'>
        {title}
      </Text>
    </View>
  );
};

export default ItemLanguageTab;
