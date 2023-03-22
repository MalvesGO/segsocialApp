import React from 'react';
import {  View, Text, Image } from 'react-native';

import styles from './styles';

import Logo from '../../assets/rsz_at.png';

const Header = () => {
  return (
    <View style={styles.header}>
        <Image source={Logo} />
    </View>
  )
}

export default Header;