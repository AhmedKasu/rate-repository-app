import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import { GET_REVIEWS } from '../graphql/queries';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReviews = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const getReviews = (repositoryId) => {
    const { data, error, loading } = useQuery(GET_REVIEWS, {
      fetchPolicy: 'cache-and-network',
      variables: { repositoryId },
    });

    return {
      reviews: data?.repository.reviews.edges,
      error,
      loading,
    };
  };

  const create = async (review) => {
    const { data } = await mutate({ variables: { review } });
    if (data) navigate(`/${data.createReview.repositoryId}`);
  };

  return { createReview: [create, result], getReviews };
};

export default useReviews;
