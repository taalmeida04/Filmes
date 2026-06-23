import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Banner from './src/components/Banner';
import Filmes from './movies';
import { FlatList } from 'react-native-web';

export default function App() {

  return (
    <View style={styles.container}>

      {/*Inicio do header*/}
      <Header></Header>
      {/*Inicio da Barra de Pesquisa*/}
      <Search></Search>
      {/*Inicio do Banner*/}
      <Banner></Banner>

      <View style={{ width: '90%' }}>
        <FlatList
          horizontal= {true}
          data= {Filmes}
          keyExtractor={(item)=> item.id}
         
          renderItem= {({item}) =>(
            <TouchableOpacity>
              <Image style ={{width:80,weight:110}} source={{uri:item.imagem}}></Image>
              <Text> {item.nome} </Text>
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
    backgroundColor: '#071230',
    alignItems: 'center',

  }



});




