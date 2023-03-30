import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 6,
    height: 70,
    width: 70,
  },
});

const ItemImage = ({ imageUrl, style }) => {
  return (
    <View style={style}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </View>
  );
};

export default ItemImage;
