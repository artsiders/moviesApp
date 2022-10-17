import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../../api/TMDBApi';
import FilmItem from './FilmItem';
import FlatButton from './shared/FlatButton';

function useForceUpdate() {
    const [_, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

export default function Search() {

    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let searchText = ""

    const loadFilms = () => {
        if (searchText.length > 0) {
            setIsLoading(true)
            getFilmsFromApiWithSearchedText(searchText).then(data => {
                setFilms(data.results)
                setIsLoading(false)
            })
        }
    }
    const handlesearch = (text) => {
        searchText = text
    }
    console.log(searchText);
    return (
        <View style={styles.main_container}>
            <View style={styles.search_box}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={handlesearch}
                    onSubmitEditing={loadFilms}
                />
                <FlatButton text='search' onPress={loadFilms} />
            </View>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            {
                isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color="#F01D71" />
                    </View>
                    :
                    <FlatList
                        data={films}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <FilmItem film={item} />}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("onEndReached")
                        }}
                    />
            }
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


