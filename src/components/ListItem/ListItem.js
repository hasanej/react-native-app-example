import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { tsPropertySignature } from '@babel/types';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        resizeMode="contain"
        source={props.placeImage}
        style={styles.placeImage}
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

export default listItem;
