import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import Filmes from './movies';
import { FlatList } from 'react-native-web';

export default function App() {
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

         <TouchableOpacity style={styles.containerFilmes}>

          <Image style={styles.images} source={{ uri: item.imagem}} />
                  <Text style ={styles.titulo}>{item.nome} </Text>
                 
                  <Text style ={styles.textNota}> {item.nota} </Text>

         </TouchableOpacity>

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





