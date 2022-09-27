import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, Image, TextInput, Button } from 'react-native';

import Axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function EditPage({ navigation }){
    
    const [titulo, setTitulo] = useState("")
    const [ing, setIng] = useState("")
    const [modo, setModo] = useState("")

    const [sendtitulo, setsendTitulo] = useState("")
    const [sending, setsendIng] = useState("")
    const [sendmodo, setsendModo] = useState("")




    useEffect(() => {
        Axios.get(`http://localhost:3000/${navigation.state.params.id}`)
            .then((response) => {
                setTitulo(response.data.titulo)
                setIng(response.data.ing)
                setModo(response.data.modo)   
            })
            .catch((err) => console.log(err))
    }, [])

    function updateData(){
        Axios.put('http://localhost:3000/updateData', {
            id : navigation.state.params.id,
            titulo : sendtitulo,
            ing : sending,
            modo : sendmodo
        }).then((response) =>{
            if(response.data == 'Dado att'){
                navigation.navigate("Home")
            }
            })
        .catch((err) => console.log(err))
    }

    function deleteData(id){
        Axios.put('http://localhost:3000/deleteData', {
            id : id
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }


    return(
        <SafeAreaView style={{
            postition : "fixed",
            overflow: 'hidden',
            height: '100%',
        }}>
            <Text onPress={() => navigation.navigate("Home")} style={{
                color : '#E398AA',
                fontSize: 30,
            }}>⬅</Text>
            <TouchableOpacity style={{
                    width: '80%',
                    borderColor: '#E398AA',
                    borderWidth: 2,
                    borderRadius: 40,
                    height: '40%',
                    marginBottom: '10%',
                    marginTop: '2%',
                    paddingBottom: "6%",
                    marginBottom: "5%",
                    marginLeft: '10%',
                    textAlign: 'center',
                }}  onPress={() => deleteData(navigation.state.params.id)}><Text style={{
                    color: '#E398AA',
                    fontWeight: 600,
                    fontSize: 20,
                    marginTop: 1,
                }}>Deletar</Text></TouchableOpacity>
            <Image 
            style={{
                height: 300,
                width: 300,
                marginLeft: '10%', 
            }}
            source={{uri : `http://localhost:3000/${navigation.state.params.id}.png`}}
            />

            <Text style={{color: "#E398AA", marginLeft: "10%", marginTop: 5}}>Nome da receita:</Text>
            <TextInput placeholder={titulo} onChangeText={sendtitulo => setsendTitulo(sendtitulo)} value={sendtitulo} 
            style={{
                marginTop: '2%',
                marginBottom: "5%",
                paddingBottom: "2%",
                paddingLeft: "2%",
                paddingTop: "2%",
                borderColor: "#E398AA",
                borderWidth: 1,
                borderRadius: 10,
                width: "60%",
                marginLeft: "10%",
            }}
            />
                
            <Text style={{color: "#E398AA", marginLeft: "10%", marginTop: 5}}>Ingredientes:</Text>
            <TextInput placeholder={ing} onChangeText={sending => setsendIng(sending)} value={sending} style={{
                marginTop: '2%',
                marginBottom: "5%",
                paddingBottom: "2%",
                paddingLeft: "2%",
                paddingTop: "2%",
                borderColor: "#E398AA",
                borderWidth: 1,
                borderRadius: 10,
                width: "60%",
                marginLeft: "10%",
            }}/>
                
            <Text style={{color: "#E398AA", marginLeft: "10%", marginTop: 5}}>Modo de preparo:</Text>
            <TextInput placeholder={modo} onChangeText={sendmodo => setsendModo(sendmodo)} value={sendmodo} style={{
                marginTop: '2%',
                marginBottom: "5%",
                paddingBottom: "2%",
                paddingLeft: "2%",
                paddingTop: "2%",
                borderColor: "#E398AA",
                borderWidth: 1,
                borderRadius: 10,
                width: "60%",
                marginLeft: "10%",
            }}/>

            <TouchableOpacity style={{
                    width: '50%',
                    borderColor: '#E398AA',
                    borderWidth: 2,
                    borderRadius: 40,
                    height: '65%',
                    marginTop: '2%',
                    marginBottom: "5%",
                    marginLeft: '25%',
                    textAlign: 'center',
                }} onPress={updateData}><Text style={{
                    color: '#E398AA',
                    fontWeight: 600,
                    fontSize: 20,
                    marginTop: 0,
                }}>Editar</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}