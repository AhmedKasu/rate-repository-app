import { gql } from '@apollo/client';
import { CORE_REVIEW_PARTS, CORE_USER_PARTS } from './fragments';

export const AUTHENTICATE_USER = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  ${CORE_USER_PARTS}
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      ...CoreUserParts
    }
  }
`;

export const CREATE_REVIEW = gql`
  ${CORE_REVIEW_PARTS}
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...CoreReviewParts
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
