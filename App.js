import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {

  return (
    <View style={styles.container}>

      {/*Inicio do Header*/}
      <View style={styles.viewHeader}>
        <Feather name="menu" size={25} color="white" />
        <Text style={styles.TextHeader}>AT FILMES</Text>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>

      {/*Inicio da Barra de Pesquisa*/}
      <View style={styles.containerSearch}>
        <TextInput
          placeholder='Digite o filme que deseja buscar'
          style={styles.inputSearch}
        ></TextInput>
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>

      </View>

      {/*Inicio do Banner*/}

      <Text style = {styles.textBanner}> Em cartaz</Text>

      <Image

        source={require("./assets/img.jpg")}
        style ={styles.imageBanner}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22222',
    alignItems: 'center',

  },
  //Header
  viewHeader: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',

  },
  TextHeader: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'

  },
  containerSearch: {
    marginTop: 20,
    width: "90%",
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSearch: {
    height: 26,
    padding: 8,
    width: '100%'
  },

  //Banner

  imageBanner: {
    width:'90%',
    height:200,
    marginTop:15,
    borderRadius:10
  },

 textBanner: {
 color:'white',
 width:'90%',
 fontSize:27,
 marginTop:15,
 fontWeight:'bold',
 
}

});


