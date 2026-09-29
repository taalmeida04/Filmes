import { View, Text,Image } from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
    const route = useRoute();
    return (
        <View>
            <Text>ESSA É MINHA TELA DE DETALHES</Text>
            <Text>{route.params.titulo}</Text>
            <Text>{route.params.nota}</Text>

            <Image style={{ width: 100, height: 100 }} source={{ uri: route.params.imagem}}></Image>

        </View>
    )
}