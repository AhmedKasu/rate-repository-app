import { gql } from '@apollo/client';

import { CORE_REPOSITORY_PARTS } from './fragments';

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
