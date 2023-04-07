import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import useAuthenticatedUser from '../../hooks/useAuthUser';
import useReviews from '../../hooks/useReviews';

import Button from '../Button';
import ItemReview from './ItemReview';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  button: {
    width: '40%',
  },
});

const UserReviews = () => {
  const includeReviews = true;
  const { user, refetch } = useAuthenticatedUser(includeReviews);
  const { deleteReview } = useReviews();
  const navigate = useNavigate();

  const reviews = user ? user.reviews.edges : [];

  const deleteButtonAlert = (review) =>
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        { text: 'CANCEL', style: 'cancel' },
        {
          text: 'DELETE',
          onPress: async () => {
            try {
              await deleteReview(review.id);
              await refetch(review.repository.id);
            } catch (e) {
              console.log(e);
            }
          },
        },
      ]
    );

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <>
          <ItemReview
            review={{
              ...item.node,
              title: item.node.repository.fullName,
            }}
          />
          <View style={styles.buttonsContainer}>
            <Button
              style={styles.button}
              height={50}
              title='View repository'
              onPress={() => navigate(`/${item.node.repository.id}`)}
            />
            <Button
              color='errorRed'
              height={50}
              title='Delete review'
              style={styles.button}
              onPress={() => deleteButtonAlert(item.node)}
            />
          </View>
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default UserReviews;
