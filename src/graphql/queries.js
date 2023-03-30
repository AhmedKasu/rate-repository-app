import { gql } from '@apollo/client';

import {
  CORE_REPOSITORY_PARTS,
  CORE_REVIEW_PARTS,
  CORE_USER_PARTS,
} from './fragments';

export const GET_AUTHENTICATED_USER = gql`
  ${CORE_USER_PARTS}
  query Me {
    me {
      ...CoreUserParts
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${CORE_REPOSITORY_PARTS}
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...CoreRepositoryParts
      url
    }
  }
`;

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_PARTS}
  query GetRepositories {
    repositories {
      edges {
        node {
          ...CoreRepositoryParts
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  ${CORE_USER_PARTS}
  ${CORE_REVIEW_PARTS}
  query Node($repositoryId: ID!) {
    repository(id: $repositoryId) {
      reviews {
        edges {
          node {
            ...CoreReviewParts
            user {
              ...CoreUserParts
            }
          }
        }
      }
    }
  }
`;
