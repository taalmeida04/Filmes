import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, inputSearch } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style';

export default function Header() {
    return (

        <View style={styles.viewHeader}>
            <Feather name="menu" size={25} color="white" />
            <Text style={styles.TextHeader}>AT FILMES</Text>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>

    );
}
