import { Platform } from 'react-native';

const theme = {
  colors: {
    steelBlue: '#2980B9',
    errorRed: '#d73a4a',
    light: '#f8f4f4',
    medium: '#6e6969',
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    white: '#FFFFFF',
  },
  fontSizes: {
    body: 14,
    heading: 18,
    subheading: 16,
  },
  fonts: {
    default: 'System',
    main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  appBar: {
    backgroundColor: '#24292e',
  },
};

export default theme;
