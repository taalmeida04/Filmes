import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js'
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({ titulo, nota, imagem }) {
    const navigation = useNavigation();
    return (

        <TouchableOpacity style={style.containerFilmes} onPress = {()=> navigation.navigate('Detalhes', {titulo,nota,imagem})} >

            <Image style={style.images} source={{ uri: imagem }}></Image>
            <Text style={style.nome}>{titulo} </Text>

            <Text style={style.Textnota}> {nota} </Text>

        </TouchableOpacity>
    )
};