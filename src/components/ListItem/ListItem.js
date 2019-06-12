import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { tsPropertySignature } from '@babel/types';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default listItem;
