import React from 'react';
import { View, Text, ScrollView } from 'react-native';


import Tenis1 from '../../assets/1.png';
import Tenis2 from '../../assets/2.png';
import Tenis3 from '../../assets/3.png';
import Tenis4 from '../../assets/4.png';
import Tenis5 from '../../assets/5.png';
import Tenis6 from '../../assets/6.png';

import styles from './style';
import Shoes from '../Shoes';

const Footer = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.titleGostar}>VOCÊ TAMBÉM PODE GOSTAR</Text>
          <View style={styles.listRow}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.listGroupTenisGostar}>
                    <Shoes img={Tenis1} cost="R$ 289,00" onClick={() => alert('Esse Tênis: *Nike Air Max Dia* não esta disponível!')}>Nike Air Max Dia</Shoes>
                </View>
                <View style={styles.listGroupTenisGostar}>
                    <Shoes img={Tenis6} cost="R$ 569,00" onClick={() => alert('Esse Tênis: *Tênis Nike Shox R4 - Masculino* não esta disponível!')}>Tênis Nike Shox R4 - Masculino</Shoes>
                </View>
                <View style={styles.listGroupTenisGostar}>
                    <Shoes img={Tenis3} cost="R$ 399,00" onClick={() => alert('Esse Tênis: *Tênis Nike Air Zoom Pegasus 36 - Masculino* não esta disponível!')}>Tênis Nike Air Zoom Pegasus 36 - Masculino</Shoes>
                </View>
              </ScrollView>
          </View>
      </View>
  );
}

export default Footer;