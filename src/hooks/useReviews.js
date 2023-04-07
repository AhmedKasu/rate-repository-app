import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import { GET_REVIEWS } from '../graphql/queries';
import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations';

const useReviews = () => {
  const [createMutate, createResult] = useMutation(CREATE_REVIEW);
  const [deleteMutate] = useMutation(DELETE_REVIEW);
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

  const createReview = async (review) => {
    const { data } = await createMutate({ variables: { review } });
    if (data) navigate(`/${data.createReview.repositoryId}`);
  };

  const deleteReview = async (deleteReviewId) => {
    await deleteMutate({ variables: { deleteReviewId } });
  };

  return { create: [createReview, createResult], deleteReview, getReviews };
};

export default useReviews;
