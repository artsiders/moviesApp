import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem';

export default function Search() {
    return (
        <View style={styles.main_container}>
            <View style={styles.search_box}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button style={styles.button} onPress={() => { }} title="🔍" color='white'></Button>
            </View>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <FilmItem film={item} />}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#ececec",
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        flex: 1,
        borderColor: '#cecece',
        borderWidth: 1,
        paddingLeft: 5
    },
    button: {
        fontSize: 20
    },
    search_box: {
        flexDirection: 'row',
        marginRight: 6,
        height: 50,
        padding: 5,
        backgroundColor: "white"
    }
})


