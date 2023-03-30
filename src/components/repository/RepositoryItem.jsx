import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Button from '../Button';
import ItemActivities from './ItemActivities';
import ItemLanguageTab from './ItemLanguageTab';
import ItemImage from './ItemImage';
import ItemHeader from './ItemHeader';

const styles = StyleSheet.create({
  container: { paddingVertical: 15 },
  headerDetails: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  gitHubButton: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  image: {
    paddingHorizontal: 15,
  },
  languageTab: {
    marginTop: 15,
  },
  footer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const RepositoryItem = ({ repository, onButtonPress, onItemPress }) => {
  if (repository)
    return (
      <Pressable onPress={onItemPress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <ItemImage
              imageUrl={repository.ownerAvatarUrl}
              style={styles.image}
            />

            <View style={styles.headerDetails}>
              <ItemHeader
                title={repository.fullName}
                subTitle={repository.description}
              />
              <ItemLanguageTab
                style={styles.languageTab}
                title={repository.language}
              />
            </View>
          </View>

          <View testID='repositoryActivities' style={styles.footer}>
            <ItemActivities
              title={repository.stargazersCount}
              subTitle='Stars'
            />
            <ItemActivities title={repository.forksCount} subTitle='Forks' />
            <ItemActivities title={repository.reviewCount} subTitle='Reviews' />
            <ItemActivities
              title={repository.ratingAverage}
              subTitle='Rating'
            />
          </View>

          <Button
            height={60}
            style={styles.gitHubButton}
            title='Open In GitHub'
            onPress={onButtonPress}
            visible={onButtonPress !== undefined}
          />
        </View>
      </Pressable>
    );
};

export default RepositoryItem;
