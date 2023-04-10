import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import { GET_REVIEWS } from '../graphql/queries';
import { CREATE_REVIEW, DELETE_REVIEW } from '../graphql/mutations';

const useReviews = () => {
  const [createMutate, createResult] = useMutation(CREATE_REVIEW);
  const [deleteMutate] = useMutation(DELETE_REVIEW);
  const navigate = useNavigate();

  const getReviews = ({ repositoryId, first }) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
      fetchPolicy: 'cache-and-network',
      variables: { repositoryId, first },
    });

    const pageInfo = data?.repository.reviews.pageInfo;

    const handleFetchMore = () => {
      const canFetchMore = !loading && pageInfo.hasNextPage;

      if (!canFetchMore) return;

      fetchMore({
        variables: {
          after: pageInfo.endCursor,
          first,
          repositoryId,
        },
      });
    };

    return {
      reviews: data?.repository.reviews.edges,
      fetchMore: handleFetchMore,
      loading,
      ...result,
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
