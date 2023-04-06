import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Picker from '../Picker';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: theme.colors.light,
  },
  searchBar: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  searchBarContainer: {
    paddingHorizontal: 15,
  },
});

const RepositoryListHeader = ({
  pickerSelectedItem,
  pickerOnSelectItem,
  pickerItems,
  searchQuery,
  onSearchQueryChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          style={styles.searchBar}
          placeholder='Search'
          onChangeText={(query) => onSearchQueryChange(query)}
          value={searchQuery}
        />
      </View>

      <Picker
        items={pickerItems}
        onSelectItem={(item) => pickerOnSelectItem(item)}
        selectedItem={pickerSelectedItem}
      />
    </View>
  );
};

export default RepositoryListHeader;
