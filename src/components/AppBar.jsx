import { ScrollView, StyleSheet, View } from 'react-native';

import AppBarTab from './AppBarTab';
import SafeAreaView from './SafeAreaView';

import theme from '../theme';
import useAuthenticatedUser from '../hooks/useAuthUser';
import useSignOut from '../hooks/useSIgnOut';

const styles = StyleSheet.create({
  barTabs: {
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  container: {
    backgroundColor: theme.appBar.backgroundColor,
    height: 100,
    marginTop: 5,
  },
});

const AppBar = () => {
  const { user } = useAuthenticatedUser();
  const { signOut } = useSignOut();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView horizontal style={styles.barTabs}>
          <AppBarTab title='Repositories' linkUrl='/' />
          {user ? (
            <AppBarTab title='Sign Out' onPress={() => signOut()} />
          ) : (
            <AppBarTab title='Sign In' linkUrl='/signIn' />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
