import { Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const AppBarTab = ({
  color = 'white',
  fontSize = 'heading',
  fontWeight = 'bold',
  linkUrl,
  title,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Link to={linkUrl}>
        <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
