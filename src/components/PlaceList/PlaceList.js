import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
};

export default placeList;
