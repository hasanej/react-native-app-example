import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';

import styles from './styles';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace != null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <View style={styles.buttonContainer}>
            <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Close" onPress={props.onModalClosed} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default placeDetail;
