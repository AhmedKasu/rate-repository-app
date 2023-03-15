import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});

const SafeAreaView = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default SafeAreaView;
