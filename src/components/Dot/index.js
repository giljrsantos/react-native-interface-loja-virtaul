import React from 'react';
import { View, Text } from 'react-native';

import styles from './style'

const Dot = (props) => {
  return (
      <View style={[styles.container, {backgroundColor: props.color }]}>
          
      </View>
  );
}

export default Dot;