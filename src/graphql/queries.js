import { gql } from '@apollo/client';

import {
  CORE_REPOSITORY_PARTS,
  CORE_REVIEW_PARTS,
  CORE_USER_PARTS,
} from './fragments';

export const GET_AUTHENTICATED_USER = gql`
  ${CORE_USER_PARTS}
  ${CORE_REVIEW_PARTS}
  query Me($includeReviews: Boolean = false) {
    me {
      ...CoreUserParts
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...CoreReviewParts
            repository {
              description
              fullName
              id
            }
          }
        }
      }
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
  query Repositories(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...CoreRepositoryParts
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  ${CORE_USER_PARTS}
  ${CORE_REVIEW_PARTS}
  query Node($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...CoreReviewParts
            user {
              ...CoreUserParts
            }
          }
          cursor
        }
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
