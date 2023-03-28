import { StyleSheet, View } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 100,
  },
  title: { paddingBottom: 10 },
});

const ItemActivities = ({ title, subTitle }) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <View style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold' style={styles.title}>
        {kFormatter(title)}
      </Text>
      <Text fontSize='subheading' color='textSecondary'>
        {subTitle}
      </Text>
    </View>
  );
};

export default ItemActivities;
