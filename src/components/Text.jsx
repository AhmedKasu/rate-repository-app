import { Text as NativeText } from 'react-native';

import theme from '../theme';

const Text = ({
  color = 'textPrimary',
  fontSize = 'body',
  fontStyle = 'main',
  fontWeight = 'normal',
  style,
  ...props
}) => {
  const textStyle = {
    color: theme.colors[color],
    fontSize: theme.fontSizes[fontSize],
    fontWeight: theme.fontWeights[fontWeight],
    fontFamily: theme.fonts[fontStyle],
  };
  return <NativeText style={[textStyle, style]} {...props} />;
};

export default Text;
