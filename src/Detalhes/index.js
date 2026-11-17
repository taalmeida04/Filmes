import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import StarRating from 'react-native-star-rating-widget';

export default function Detalhes() {

    const route = useRoute();

    const { titulo, nota, imagem, sinopse } = route.params;

    return (
        <ScrollView
    style={{
        flex: 1,
        minHeight: 0,
        backgroundColor: '#141a29',

    }}
    contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        paddingBottom: 100,
    }}
    showsVerticalScrollIndicator={true}>

            <Text style={styles.cabecalho}>Sobre</Text>

            <View style={styles.card}>

                <Image
                    style={styles.imagem}
                    source={{ uri: imagem }}
                />

                <Text style={styles.titulo}>
                    {titulo}
                </Text>

                <View style={styles.notaContainer}>

                    <StarRating
                        rating={Number(nota) / 2}
                        onChange={() => {}}
                        starSize={25}
                        maxStars={5}
                        enableSwiping={false}
                    />

                </View>

                <Text style={styles.subtitulo}>
                    Sinopse
                </Text>

                <Text style={styles.sinopse}>
                    {sinopse}
                </Text>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#141a29',
    },

    conteudo: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 50,
        paddingBottom: 100,
        alignItems: 'center',
    },

    cabecalho: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 30,
    },

    card: {
        width: '100%',
        maxWidth: 750,
        backgroundColor: '#202a40',
        borderRadius: 18,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },

    imagem: {
        width: '100%',
        height: 400,
        borderRadius: 12,
        marginBottom: 20,
        resizeMode: 'cover',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 15,
    },

    notaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },

    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },

    sinopse: {
        fontSize: 16,
        color: '#d1d5db',
        textAlign: 'justify',
        lineHeight: 24,
        alignSelf: 'stretch',
    },

});