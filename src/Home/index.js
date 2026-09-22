import { StyleSheet,FlatList, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Banner from '../components/Banner';
import CardMovies from '../components/CardMovies';
import Filmes from "../../movies"


export default function Home() {
  return (
    <View style={styles.container}>

     <Header></Header>
     <Search></Search>
     <Banner></Banner>
     

    <View style = {{width:'90%'}}>
    <FlatList
    showsVerticalScrollIndicator= {false}
    horizontal = {true}
    data={Filmes}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=> (

         <CardMovies
                    titulo={item.nome}
                    imagem={item.imagem}
                    nota={item.nota}
                    />

    )}
   
   
   
   
    />
     
    </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }


});





