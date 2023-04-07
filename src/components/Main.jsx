import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';

import CreateReview from './CreateReview';
import RepositoryList from './repository/RepositoryList';
import Repository from './repository/Repository';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserReviews from './repository/UserReviews';

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/:id' element={<Repository />} exact />
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/createReview' element={<CreateReview />} exact />
        <Route path='/myReviews' element={<UserReviews />} exact />
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signUp' element={<SignUp />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
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
