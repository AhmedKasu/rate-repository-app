import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#FFFFFF',
  },
  fontSizes: {
    body: 14,
    heading: 18,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
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
