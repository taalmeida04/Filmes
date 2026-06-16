import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {

  return (
    <View style={styles.container}>

      {/*Inicio do header*/}
      <Header></Header>
      {/*Inicio da Barra de Pesquisa*/}
      <Search></Search>
      {/*Inicio do Banner*/}

      <Text style={styles.textBanner}> Em cartaz</Text>

      <Image

        source={require("./assets/img.jpg")}
        style={styles.imageBanner}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071230',
    alignItems: 'center',

  },
  //Banner
  imageBanner: {
    width: '90%',
    height: 200,
    marginTop: 15,
    borderRadius: 10
  },

  textBanner: {
    color: 'white',
    width: '90%',
    fontSize: 27,
    marginTop: 15,
    fontWeight: 'bold',

  },


});


