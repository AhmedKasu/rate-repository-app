import { render, screen } from '@testing-library/react-native';

import { RepositoryListContainer } from '../../components/repository/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      const [firstHeader, secondHeader] =
        screen.getAllByTestId('repositoryHeader');

      expect(firstHeader).toHaveTextContent('jaredpalmer/formik');
      expect(firstHeader).toHaveTextContent(
        'Build forms in React, without the tears'
      );

      expect(secondHeader).toHaveTextContent('async-library/react-async');
      expect(secondHeader).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      const [firstTab, secondTab] = screen.getAllByTestId('languageTab');

      expect(firstTab).toHaveTextContent('TypeScript');
      expect(secondTab).toHaveTextContent('JavaScript');

      const [firstActivity, secondActivity] = screen.getAllByTestId(
        'repositoryActivities'
      );

      expect(firstActivity).toHaveTextContent('21.9k');
      expect(firstActivity).toHaveTextContent('Stars');
      expect(firstActivity).toHaveTextContent('Forks');
      expect(firstActivity).toHaveTextContent('1.6k');
      expect(firstActivity).toHaveTextContent('Review');
      expect(firstActivity).toHaveTextContent('3');
      expect(firstActivity).toHaveTextContent('Rating');
      expect(firstActivity).toHaveTextContent('88');

      expect(secondActivity).toHaveTextContent('Stars');
      expect(secondActivity).toHaveTextContent('1.8k');
      expect(secondActivity).toHaveTextContent('Forks');
      expect(secondActivity).toHaveTextContent('69');
      expect(firstActivity).toHaveTextContent('Review');
      expect(firstActivity).toHaveTextContent('3');
      expect(secondActivity).toHaveTextContent('Rating');
      expect(secondActivity).toHaveTextContent('72');
    });
  });
});
