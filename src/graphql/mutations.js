import { gql } from '@apollo/client';

import { CORE_REVIEW_PARTS } from './fragments';

export const CREATE_REVIEW = gql`
  ${CORE_REVIEW_PARTS}
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...CoreReviewParts
      repositoryId
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
