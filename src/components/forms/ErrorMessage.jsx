import { View } from 'react-native';

import Text from '../Text';

const ErrorMessage = ({ error, style, visible }) => {
  // console.log('message', error);
  if (visible)
    return (
      <View style={style}>
        <Text color='errorRed'>{error}</Text>
      </View>
    );
};

export default ErrorMessage;
