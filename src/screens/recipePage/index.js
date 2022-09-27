import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import styles from './style.js'

export default function RecipePage({ navigation }){

    const [titulo, setTitulo] = useState('')
    const [ing, setIng] = useState('')
    const [modo, setModo] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:3000/${navigation.state.params.id}`)
        .then((response) => {
            setTitulo(response.data.titulo)
            setIng(response.data.ing)
            setModo(response.data.modo)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
    <View style={styles.container}>
        <Text style={styles.seta} onPress={() => navigation.navigate("HomeVi")}>⬅</Text>
        <Image source={{uri : `http://localhost:3000/${navigation.state.params.id}.png`}} 
        style={{
            width: 300,
            height: 300
        }}
        />
        <Text style={styles.txtContTitle}>{titulo}</Text>

        <Text style={styles.txtContModo}>Ingredientes:</Text>
        <Text style={styles.txtCont}>{ing}</Text>

        <Text style={styles.txtContModo}>Modo de preparo:</Text>
        <Text style={styles.txtCont}>{modo}</Text>
    </View>
    )
}