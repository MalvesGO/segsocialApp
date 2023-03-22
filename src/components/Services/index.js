import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import styles from './styles';

const services = [
    {
        id: 1,
        title: 'Arrendamento',
        subtitle: 'Emitir e consultar',
    },
    {
        id: 2,
        title: 'IUC',
        subtitle: 'Emitir documento',
    },
    {
        id: 3,
        title: 'e-Fatura',
        subtitle: 'Verificar ou registar',
    },
    {
        id: 4,
        title: 'Faturas e Recibos',
        subtitle: 'Emitir e consultar',
    },
    {
        id: 5,
        title: 'Notificações e Citacoes',
    },
    {
        id: 6,
        title: 'Execucoes Fiscais',
    }
]

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.title}>Servicos Frequentes</Text>
            <FlatList
                data={services}
                keyExtractor={service => String(service.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: service }) => (
                    <View style={styles.service}>
                        <View>
                            <Text style={styles.serviceTitle}>{service.title}</Text>
                            <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
                        </View>
                        <Entypo name="arrow-with-circle-right" size={24} color="#0084cc" />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Home;