import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { tsPropertySignature } from '@babel/types';

const listItem = (props) => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default listItem;
