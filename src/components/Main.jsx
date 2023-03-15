import { StyleSheet, View } from 'react-native';

import AppBar from './AppBar';

import RepositoryList from './repository/RepositoryList';

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
export default Main;
