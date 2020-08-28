import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const SizeButton = (props) => {
  return (
      <View style={[styles.container, { backgroundColor: props.bgColor || '#fff' }]}>
        <Text style={[styles.TitleSize, {  color: props.color || '#c9c' }]}>
            {props.children}
        </Text>
      </View>
  );
}

export default SizeButton;