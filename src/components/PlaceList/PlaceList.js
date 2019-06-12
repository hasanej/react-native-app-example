import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem
            key={i}
            placeName={place}
            onItemPressed={() => props.onItemDeleted(i)}
        />
      ));
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    );
};

export default placeList;
