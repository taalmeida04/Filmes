import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style';

export default function Search(){
    return(
         <View style={styles.containerSearch}>
                <TextInput
                  placeholder='Digite o filme que deseja buscar'
                  style={styles.inputSearch}
                ></TextInput>
        
                <TouchableOpacity>
                  <Feather name="search" size={24} color="white" />
                </TouchableOpacity>
        
              </View>
    );
}