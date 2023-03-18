import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
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

const TextInput = ({ error, style, ...props }) => {
  const textInputStyle = [styles.textInput, style];
  const borderColor = {
    borderColor: !error ? theme.colors.medium : theme.colors.errorRed,
  };

  return (
    <View style={[styles.container, borderColor]}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
