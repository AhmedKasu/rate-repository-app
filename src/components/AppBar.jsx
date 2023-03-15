import { StyleSheet, View } from 'react-native';

import AppBarTab from './AppBarTab';
import SafeAreaView from './SafeAreaView';
import theme from '../theme';

const styles = StyleSheet.create({
  barTabs: {
    bottom: 25,
    flexDirection: 'row',
    paddingHorizontal: 10,
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
          <AppBarTab title='Repositories' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
