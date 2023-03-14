import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});
export default Main;