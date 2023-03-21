import { gql } from '@apollo/client';

export const CORE_REPOSITORY_PARTS = gql`
  fragment CoreRepositoryParts on Repository {
    description
    fullName
    forksCount
    language
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
  }
`;
