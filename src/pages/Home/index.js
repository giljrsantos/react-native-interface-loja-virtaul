import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Tenis1 from '../../assets/1.png';
import Tenis2 from '../../assets/2.png';
import Tenis3 from '../../assets/3.png';
import Tenis4 from '../../assets/4.png';
import Tenis5 from '../../assets/5.png';
import Tenis6 from '../../assets/6.png';

import styles from './style';
import Banner from '../../assets/banner.png'
import Shoes from '../../components/Shoes';

function Home() {

const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
        <Image
          source={Banner}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.textBlack}>TÊNIS</Text>
          <Text style={styles.textGray}>•</Text>
          <Text style={styles.textGray}>MASCULINO</Text>
          <TouchableOpacity style={styles.filterList}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.textLacamento}>LANÇAMENTOS</Text>
        <View style={styles.lancamentos}>
          <Shoes img={Tenis1} cost="R$140,00" onClick={() => navigation.navigate('Detail')}>Nike Air Max Dia</Shoes>
          <Shoes img={Tenis2} cost="R$280,00" onClick={() => navigation.navigate('Detail')}>Nike Downshifter 10</Shoes>
        </View>
        <View style={styles.lancamentos}>
          <Shoes img={Tenis3} cost="R$569,99" onClick={() => alert('Esse Tênis: *Tênis Nike Shox R4 - Masculino* não esta disponível!')}>Tênis Nike Shox R4 - Masculino</Shoes>
          <Shoes img={Tenis4} cost="R$279,99" onClick={() => alert('Esse Tênis: *Tênis Nike Revolution 5 - Masculino* não esta disponível!')}>Tênis Nike Revolution 5 - Masculino</Shoes>
        </View>
        <View style={styles.lancamentos}>
          <Shoes img={Tenis5} cost="R$139,99" onClick={() => alert('Esse Tênis: *Tênis Nike Downshifter 9 - Feminino* não esta disponível!')}>Tênis Nike Downshifter 9 - Feminino</Shoes>
          <Shoes img={Tenis6} cost="R$399,99" onClick={() => alert('Esse Tênis: *Tênis Nike Air Zoom Pegasus 36 - Masculino* não esta disponível!')}>Tênis Nike Air Zoom Pegasus 36 - Masculino</Shoes>
        </View>
      </ScrollView>

   </View>
  );
}

export default Home;