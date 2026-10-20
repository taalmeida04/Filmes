import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Sobre</Text>
            <View style={styles.card}>
                <Image
                    style={styles.imagem}
                    source={{ uri: route.params.imagem }}
                />
                <Text style={styles.titulo}>
                    {route.params.titulo}
                </Text>
                <View style={styles.notaContainer}>
                    <Text style={styles.nota}>
                        Nota: {route.params.nota}
                    </Text>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    cabecalho: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
    },
    card: {
        width: '100%',
        backgroundColor: '#202a40',
        borderRadius: 18,
        padding: 15,
        alignItems: 'center',

    },
    imagem: {
        width: '100%',
        height: 400,
        borderRadius: 12,
        marginBottom: 20,

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
        marginBottom: 10,
    },
    nota: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
    },
});