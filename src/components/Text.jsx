import { Text as NativeText } from 'react-native';

import theme from '../theme';

const Text = ({
  color = 'textPrimary',
  fontSize = 'body',
  fontWeight = 'normal',
  style,
  ...props
}) => {
  const textStyle = {
    color: theme.colors[color],
    fontSize: theme.fontSizes[fontSize],
    fontWeight: theme.fontWeights[fontWeight],
  };
  return <NativeText style={[textStyle, style]} {...props} />;
};

export default Text;
