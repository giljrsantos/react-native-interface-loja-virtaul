import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './style';
import ImgDetail from '../../assets/detail.png';
import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  });
 return (
   <ScrollView>
       <Image
        style={styles.image}
        source={ImgDetail}
        resizeMode="cover"
       />

       <View>

        <View>
          <Text style={styles.titlePrice}>R$ 289,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={styles.titleName}>Nike Downshifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={styles.ListSize}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>

          <Text style={styles.titleContent}>Nike Downshifter 10</Text>

          <Text style={styles.descriptionContent}>
              O Nike Air Vapormax 2020 FK veio nos preparar para um novo futuro com o inédito amortecimento 
              Air VaporMax 2 – o primeiro com uma única unidade Air por toda extensão do tênis. 
              O cabedal em FlyKnit é leve e feito de material reciclado, semelhante ao linho, 
              para maior respirabilidade. 
              E isso é só o começo. Amarre o seu, ajude o planeta e viva os seus sonhos.
          </Text>

          <Text style={styles.textList}>
            -Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            -Material: Mash
          </Text>

        </View>

        <Button/>

        <View style={styles.line}/>

        <View>
          <Footer/>
        </View>

       </View>
   </ScrollView>
  );
}

export default Detail;