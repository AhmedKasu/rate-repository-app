import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Button from '../Button';
import ItemActivities from './ItemActivities';
import ItemLanguageTab from './ItemLanguageTab';
import RepositoryItemImage from './RepositoryItemImage';
import RepositoryItemHeader from './RepositoryItemHeader';

const styles = StyleSheet.create({
  container: { paddingVertical: 20 },
  details: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  gitHubButton: {
    padding: 10,
  },
  image: {
    paddingHorizontal: 15,
  },
  languageTab: {
    marginTop: 25,
  },
  footer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const RepositoryItem = ({ repository, onButtonPress, onItemPress }) => {
  if (!repository) return null;
  return (
    <Pressable onPress={onItemPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.image}>
            <RepositoryItemImage imageUrl={repository.ownerAvatarUrl} />
          </View>

          <View style={styles.details}>
            <RepositoryItemHeader
              title={repository.fullName}
              subTitile={repository.description}
            />
            <View style={styles.languageTab}>
              <ItemLanguageTab title={repository.language} />
            </View>
          </View>
        </View>

        <View testID='repositoryActivities' style={styles.footer}>
          <ItemActivities title={repository.stargazersCount} subTitle='Stars' />
          <ItemActivities title={repository.forksCount} subTitle='Forks' />
          <ItemActivities title={repository.reviewCount} subTitle='Reviews' />
          <ItemActivities title={repository.ratingAverage} subTitle='Rating' />
        </View>

        <View style={styles.gitHubButton}>
          <Button
            title='Open In GitHub'
            onPress={onButtonPress}
            visible={onButtonPress !== undefined}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
