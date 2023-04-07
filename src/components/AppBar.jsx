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
          <AppBarTab
            title='Create a review'
            linkUrl='/createReview'
            visible={user}
          />
          <AppBarTab title='My reviews' linkUrl='/myReviews' visible={user} />

          <AppBarTab title='Sign in' linkUrl='/signIn' visible={!user} />
          <AppBarTab title='Sign Up' linkUrl='/signUp' visible={!user} />

          <AppBarTab
            title='Sign out'
            onPress={() => signOut()}
            visible={user}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
