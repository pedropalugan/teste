import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './style.js'
import Header from '../../Components/Header/index.js';

function HomeVi({ navigation }) {

    function back(){
        navigation.navigate("Login")
    }

    function destNavegation(){
        navigation.navigate("BolosVi")
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <View style={styles.viewHeaderBandeira}>
                <Image style={styles.imgHeader} source={require("../../../assets/logo.png")}/>
            </View>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            <View style={styles.viewMsg}>
                <Text style={styles.msgOla}>Olá, Visitante</Text>
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

export default HomeVi;
