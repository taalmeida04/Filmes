import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';

export default function Detalhes() {

    const route = useRoute();

    const { titulo, nota, imagem, sinopse } = route.params;

    return (

        <ScrollView

            style={styles.screen}

            contentContainerStyle={styles.content}

            showsVerticalScrollIndicator={true}

        >

            <Image

                style={styles.poster}

                source={{ uri: imagem }}

            />

            <Text style={styles.title}>

                {titulo}

            </Text>

            <Text style={styles.rating}>

                ⭐ {nota}

            </Text>

            <View style={styles.synopsisSection}>

                <Text style={styles.synopsisTitle}>

                    Sinopse

                </Text>

                <Text style={styles.synopsis}>

                    {sinopse}

                </Text>

            </View>

        </ScrollView>

    );

}

const styles = StyleSheet.create({

    screen: {

        flex: 1,

        backgroundColor: '#141a29',

    },

    content: {

        padding: 20,

        paddingBottom: 50,

        flexGrow: 1,

    },

    poster: {

        width: '100%',

        height: 400,

        borderRadius: 12,

        resizeMode: 'cover',

    },

    title: {

        color: '#fff',

        fontSize: 25,

        fontWeight: 'bold',

        marginTop: 15,

    },

    rating: {

        color: '#fff',

        fontSize: 18,

        marginTop: 10,

    },

    synopsisSection: {

        marginTop: 25,

    },

    synopsisTitle: {

        color: '#fff',

        fontSize: 22,

        fontWeight: 'bold',

        marginBottom: 10,

    },

    synopsis: {

        color: '#d1d5db',

        fontSize: 16,

        lineHeight: 24,

        textAlign: 'justify',

    },

});