import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';

import styles from './styles';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          source={props.selectedPlace.image}
          style={styles.placeImage}
        />
        <Text style={styles.modalTextContainer}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.selectedPlace != null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <View style={styles.buttonContainer}>
            <Button title="Delete" color="red" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Close" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default placeDetail;
