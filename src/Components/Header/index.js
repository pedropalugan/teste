import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js'

function Header() {
    return (
        <View style={styles.viewHeaderBandeira}>
            <Image style={styles.imgHeader} source={require("../../../assets/logo.png")}/>
            <View style={styles.viewHeader}>
            <Text style={styles.txtHeader}>Add +</Text>
            </View>
        </View>
    );
}

export default Header;
