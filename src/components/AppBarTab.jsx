import { Pressable, StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {},
});

const AppBarTab = ({
  color = 'white',
  fontSize = 'heading',
  fontWeight = 'bold',
  title,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default AppBarTab;
