import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';

import styles from './styles';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.placeImage} />
        <Text>{props.selectedPlace.placeName}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace != null}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" />
          <Button title="Close" />
        </View>
      </View>
    </Modal>
  );
}

export default placeDetail;
