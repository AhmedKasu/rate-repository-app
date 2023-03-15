import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 12,
    height: 80,
    width: 80,
  },
});

const RepositoryItemImage = ({ imageUrl }) => {
  return <Image style={styles.image} source={{ uri: imageUrl }} />;
};

export default RepositoryItemImage;
