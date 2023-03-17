import { ScrollView, StyleSheet, View } from 'react-native';

import AppBarTab from './AppBarTab';
import SafeAreaView from './SafeAreaView';
import theme from '../theme';

const styles = StyleSheet.create({
  barTabs: {
    paddingHorizontal: 15,
    paddingTop: 55,
  },
  container: {
    backgroundColor: theme.appBar.backgroundColor,
    height: 100,
    marginTop: 5,
  },
});

const AppBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView horizontal style={styles.barTabs}>
          <AppBarTab title='Repositories' linkUrl='/' />
          <AppBarTab title='Sign In' linkUrl='/signIn' />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
