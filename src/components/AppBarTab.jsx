import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
  },
});

const AppBarTab = ({
  color = 'white',
  fontSize = 'heading',
  fontWeight = 'bold',
  linkUrl,
  title,
  onPress,
  visible = true,
}) => {
  if (visible)
    return (
      <>
        {linkUrl ? (
          <View style={styles.container}>
            <Link to={linkUrl}>
              <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
                {title}
              </Text>
            </Link>
          </View>
        ) : (
          <Pressable onPress={onPress}>
            <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
              {title}
            </Text>
          </Pressable>
        )}
      </>
    );
};

export default AppBarTab;
