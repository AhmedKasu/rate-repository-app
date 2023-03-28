import { StyleSheet, View } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: { paddingBottom: 15, paddingRight: 7 },
  subTitle: {
    paddingRight: 7,
  },
});

const RepositoryItemHeader = ({ title, subTitle }) => {
  return (
    <View testID='repositoryHeader' style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold' style={styles.title}>
        {title}
      </Text>
      <Text fontSize='subheading' color='textSecondary' style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
};

export default RepositoryItemHeader;
