import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = () => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.titleButton}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Button;