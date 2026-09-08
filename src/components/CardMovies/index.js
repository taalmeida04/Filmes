import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import style from './style.js'

export default function CardMovies({titulo,nota,imagem}){

    return(
        <TouchableOpacity style={style.containerFilmes} >
        
        <Image style={style.imagem} source={{uri:imagem}}></Image>
        <Text style={style.nome}>{titulo} </Text>

        <Text style={style.Textnota}> {nota} </Text>
        
        </TouchableOpacity>
    )
};