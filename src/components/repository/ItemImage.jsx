import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 6,
    height: 70,
    width: 70,
  },
});

const ItemImage = ({ imageUrl }) => {
  return <Image style={styles.image} source={{ uri: imageUrl }} />;
};

export default ItemImage;
