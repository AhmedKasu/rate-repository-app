import { Pressable } from 'react-native';

import Text from './Text';

const AppBarTab = ({
  color = 'white',
  fontSize = 'heading',
  fontWeight = 'bold',
  title,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <>
        <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </Text>
      </>
    </Pressable>
  );
};

export default AppBarTab;
