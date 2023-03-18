import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.medium,
    borderRadius: 5,
    height: 70,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: theme.fontSizes.subheading,
    paddingLeft: 20,
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return (
    <View style={styles.container}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
