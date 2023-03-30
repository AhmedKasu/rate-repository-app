import { gql } from '@apollo/client';

export const CORE_REPOSITORY_PARTS = gql`
  fragment CoreRepositoryParts on Repository {
    description
    fullName
    forksCount
    id
    language
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
  }
`;

export const CORE_USER_PARTS = gql`
  fragment CoreUserParts on User {
    id
    username
  }
`;
export const CORE_REVIEW_PARTS = gql`
  fragment CoreReviewParts on Review {
    id
    text
    rating
    createdAt
  }
`;
