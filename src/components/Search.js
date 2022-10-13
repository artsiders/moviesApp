import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem';

export default function Search() {
    return (
        <View style={styles.main_container}>
            <TextInput style={styles.textinput} placeholder='Titre du film' />
            <Button onPress={() => { }} title="rechercher"></Button>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <FilmItem data={item} />}
            />


        </View>


    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})


