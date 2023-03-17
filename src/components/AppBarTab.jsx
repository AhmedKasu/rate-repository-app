import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
  },
});

const AppBarTab = ({
  color = 'white',
  fontSize = 'heading',
  fontWeight = 'bold',
  linkUrl,
  title,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Link to={linkUrl}>
          <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
            {title}
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
