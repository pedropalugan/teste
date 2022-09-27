import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles'
import Axios from 'axios'

export default function PostPage({ navigation }){

    const [img, setImg] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [ing, setIng] = useState('')
    const [modo, setModo] = useState('')


    const Submit = () => {

        const form = new FormData()
        form.append('pic', img)
        form.append('titulo', titulo)
        form.append('ing', ing)
        form.append('modo', modo)



         Axios.post('http://localhost:3000/postMeal', form).then((response) => console.log(response))
        .catch((err) => console.log(err)) 
    }

    return(
        <View style={styles.contAdd}>
            <Text style={styles.seta} onPress={() => navigation.navigate("Home")}>⬅</Text>

            <Text style={styles.contName}>Imagem da receita:</Text>
            <input type='file' onChange={e => setImg(e.target.files[0])}/> 

            <Text style={styles.contName}>Nome da receita:</Text>
            <TextInput style={styles.input} onChangeText={titulo => setTitulo(titulo)} value={titulo}/>

            <Text>Ingredientes:</Text>
            <TextInput style={styles.input2} onChangeText={ing => setIng(ing)} value={ing}/>

            <Text>Modo de Preparo:</Text>
            <TextInput style={styles.input2} onChangeText={modo => setModo(modo)} value={modo}/>

            <TouchableOpacity style={styles.btnSub} onPress={Submit}><Text style={styles.txtBtn}>Adicionar</Text></TouchableOpacity>
        </View>
    );
}