import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header';

const Login = () => {

  const navigation = useNavigation();

  const tabs = [
    {
      id: 1,
      name: 'GOV.PT',
      icon: <MaterialIcons name="home" size={24} color="#fff" />
    },
    {
      id: 2,
      name: 'NIF',
      icon: <AntDesign name="search1" size={24} color="#fff" />
    },
    {
      id: 3,
      name: 'EORI',
      icon: <FontAwesome name="plus-square" size={24} color="#fff" />
    }
  ]

  const [selectedTab, setSelectedTab] = useState(2);
  const [active, setActive] = useState(false);

  function openTab(tab) {
    setSelectedTab(tab.id);
    setActive(true);
  }

  function Login() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.wellcome}>Bem vindo, 
        proceda com a autenticacao para aceder aos seus servicos fiscais
      </Text>

      <View style={styles.tabs}>
        {tabs.map(tab => (
          <Pressable
            key={tab.id}
            style={selectedTab === tab.id ? styles.active : styles.tab}
            onPress={() => openTab(tab)}
          >
            <Text style={styles.tabText}>{tab.name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.tabContent}>
        {
          selectedTab === 1 ? (
            <View style={styles.content}>
              <Text style={styles.wellcome}>Faca sua autenticacao com cartao de cidadao ou chave movel digital</Text>
              <Pressable style={styles.button}>
                <Text style={styles.btnText}>Autenticar</Text>
              </Pressable>
            </View>
          ) : selectedTab === 2 ? (
            <View style={styles.content}>
              <TextInput
                style={styles.input}
                placeholder="N de Contribuinte"
                placeholderTextColor="#737380"
                // numbers only
                keyboardType="numeric"
                autoCorrect={false}
                maxLength={9}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha de Acesso"
                placeholderTextColor="#737380"
                secureTextEntry
                autoCorrect={false}
              />
              <Pressable style={{
                ...styles.button,
                marginTop: 30,
              }} onPress={Login}>
                <Text style={styles.btnText}>Autenticar</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.content}>
              <TextInput
                style={styles.input}
                placeholder="EORI Id"
                placeholderTextColor="#737380"
                autoCapitalize="characters"
                autoCorrect={false}
                maxLength={9}
              />
              <TextInput
                style={styles.input}
                placeholder="EORI Password"
                placeholderTextColor="#737380"
                secureTextEntry
                autoCorrect={false}
              />
              <Pressable style={{
                ...styles.button,
                marginTop: 30,
              }} onPress={Login}>
                <Text style={styles.btnText}>Autenticar</Text>
              </Pressable>
            </View>
          )
        }
      </View>

      <View style={styles.links}>
        <Text style={styles.uteis}>Links Uteis</Text>

        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Recuperar Senha</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Alterar dados de Acesso</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Novo Utilizador</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default Login;