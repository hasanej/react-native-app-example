import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const listItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

export default listItem;
