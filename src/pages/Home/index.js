import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />     

      <View style={styles.info}>

        <View style={styles.details}>
          <Text style={styles.name}>Olá Marcelo R. Alves</Text>
          <Text style={styles.numberNif}>Nif: 123456789</Text>
        </View>

        <View style={styles.actions}>
          <AntDesign name="message1" size={24} color="#0D2151" />
          <FontAwesome name="user-circle-o" size={24} color="#0D2151" />
          <MaterialIcons
            name="logout"
            size={24}
            color="#0D2151"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

      </View>

      <View style={styles.lineStyle} />

      <View style={styles.sFiscal}>
        <FontAwesome name="check" size={24} color="#fff" />
        <Text style={styles.title}>Situação Fiscal Regularizada</Text>
      </View>

      <Services />

    </View>
  )
}

export default Home;