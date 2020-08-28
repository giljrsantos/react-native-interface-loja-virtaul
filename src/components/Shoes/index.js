import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Tenis1 from '../../assets/1.png';
import styles from './styles';

function Shoes(props) {

  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }
    return `${desc.substring(0, 20)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.shoesImg}
      />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <Text style={styles.shoesPrice}>{props.cost}</Text>
    </TouchableOpacity>
  );
}


export default Shoes;