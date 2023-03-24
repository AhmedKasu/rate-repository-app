import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(`${this.namespace}:token`);
      return token ? JSON.parse(token) : null;
    } catch (e) {
      console.log('error retrieving access token: ', e);
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:token`,
        JSON.stringify(accessToken)
      );
    } catch (e) {
      console.log('error storing access token: ', e);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:products`);
    } catch (e) {
      console.log('error removing access token: ', e);
    }
  }
}

export default AuthStorage;
