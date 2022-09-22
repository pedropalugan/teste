import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './style.js'
import Header from '../../Components/Header/index.js';
import { TouchableOpacity } from 'react-native-web';

function Option({ navigation }) {

    function back(){
        navigation.navigate("Login")
    }

    function destNavegation(){
        navigation.navigate("DestinySant")
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <Header />

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            <View style={styles.viewMsg}>
                <TouchableOpacity onPress={() => navigation.navigate("EditPage")}>
                    <Text>Add +</Text>
                </TouchableOpacity> 
                <Text style={styles.msgOla}>Olá, Matheus</Text>
                <Text style={styles.txtBemVindo}>Bem-vindo ao app de receitas InfoBolos</Text>
            </View>

            <View style={styles.viewLogo} onPress={() => navigation.navigate('Cadastro')}>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtOpc1} onPress={() => destNavegation()}>Bolo simples e fofo</Text>
                </View>
            </View>

            <View style={styles.viewLogo} onPress={() => navigation.navigate('Cadastro')}>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtOpc1} onPress={() => destNavegation()}>Bolo simples e fofo</Text>
                </View>
            </View>

            <View style={styles.viewLogo} onPress={() => navigation.navigate('Cadastro')}>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtOpc1} onPress={() => destNavegation()}>Bolo simples e fofo</Text>
                </View>
            </View>

            <View style={styles.viewLogo} onPress={() => navigation.navigate('Cadastro')}>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtOpc1} onPress={() => destNavegation()}>Bolo simples e fofo</Text>
                </View>
            </View>

            <View style={styles.viewLogo} onPress={() => navigation.navigate('Cadastro')}>
                <View style={styles.viewHeader}>
                    <Text style={styles.txtOpc1} onPress={() => destNavegation()}>Bolo simples e fofo</Text>
                </View>
            </View>

        </View>
    );
}

export default Option;
