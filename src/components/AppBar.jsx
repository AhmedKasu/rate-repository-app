import { StyleSheet, View } from 'react-native';

import AppBarTab from './AppBarTab';
import SafeAreaView from './SafeAreaView';
import theme from '../theme';

const styles = StyleSheet.create({
  barTabs: {
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: theme.appBar.backgroundColor,
    justifyContent: 'flex-end',
    height: 100,
    marginTop: 5,
  },
});

const AppBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.barTabs}>
          <AppBarTab title='Repositories' linkUrl='/' />
          <AppBarTab title='Sign In' linkUrl='/signIn' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
