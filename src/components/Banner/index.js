import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style';

export default function Banner() {
    return (

        <>
            <Text style={styles.textBanner}> Em cartaz</Text>

            <Image

                source={require("../../../assets/img.jpg")}
                style={styles.imageBanner}
            />
        </>

    );
}
