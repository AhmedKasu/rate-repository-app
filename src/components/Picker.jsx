import { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    width: '85%',
  },
  modalItem: {
    paddingVertical: 15,
  },
  buttonOpen: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 20,
  },
});

const Picker = ({ items = [], selectedItem, onSelectItem }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onSelectItem(item);
    setVisible(!visible);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.buttonOpen}>
          <Text fontSize='heading'>{selectedItem}</Text>
          <AntDesign name='caretdown' size={15} color={theme.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType='fade'
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              color='textSecondary'
              style={styles.modalItem}
              fontSize='heading'>
              Select an item...
            </Text>
            {items.map((item) => (
              <Pressable
                style={styles.modalItem}
                key={item.label}
                onPress={() => handleSelect(item)}>
                <Text fontSize='heading'>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Picker;
