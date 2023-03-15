import { StyleSheet, View } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: { paddingBottom: 15 },
});

const RepositoryItemHeader = ({ title, subTitile }) => {
  return (
    <View style={styles.container}>
      <Text fontSize='heading' fontWeight='bold' style={styles.title}>
        {title}
      </Text>
      <Text fontSize='heading' color='textSecondary'>
        {subTitile}
      </Text>
    </View>
  );
};

export default RepositoryItemHeader;
