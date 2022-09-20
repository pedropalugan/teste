import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from './style.js'
import Header from '../../Components/Header/index.js';

function Cadastro({ navigation }) {

  function back(){
    navigation.navigate("Login")
  }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f68b1f" barStyle="dark-content"/>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            
            <View style={styles.viewCadastro}>
                <Text style={styles.txtCad}>LOGIN</Text>
                <TextInput style={styles.input} placeholder=' Usuário'/>
                <TextInput style={styles.input} placeholder=' Senha' secureTextEntry={true}/>
            </View>

            <View style={styles.viewCadastro}>
              <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.txtBtn}>Entrar</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cadastro;
