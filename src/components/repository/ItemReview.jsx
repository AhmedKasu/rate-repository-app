import { StyleSheet, View } from 'react-native';

import { format } from 'date-fns';

import ItemHeader from './ItemHeader';
import ItemRating from './ItemRating';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  details: { paddingLeft: 15, flex: 1 },
  text: {
    lineHeight: 17,
    paddingVertical: 15,
  },
});

const ItemReview = ({ review }) => {
  if (review)
    return (
      <View View style={styles.container}>
        <ItemRating rating={review.rating} />

        <View style={styles.details}>
          <ItemHeader
            title={review.title}
            subTitle={format(new Date(review.createdAt), 'dd/MM/yyyy')}
          />
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    );
};

export default ItemReview;
