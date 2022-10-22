import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../../api/TMDBApi';
import FilmItem from './FilmItem';
import FlatButton from './shared/FlatButton';

export default function Search(props) {
    const { navigate } = props.navigation
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(0)

    let oldFilms = films

    const loadFilms = () => {
        setIsLoading(true)
        let curentPage = page + 1
        getFilmsFromApiWithSearchedText(searchText, curentPage).then(data => {
            setPage(data.page)
            setTotalPages(data.total_pages)
            setFilms([...oldFilms, ...data.results])
            setIsLoading(false)
        })
            .catch(error => {
                console.warn(error);
            })
    }
    const searchFilm = () => {
        oldFilms = []
        setFilms([])
        setPage(0)
        setTotalPages(0)
        loadFilms()
    }
    const displayLoading = () => {
        if (isLoading)
            return <ActivityIndicator size='large' color="#F01D71" />
    }

    // filmdetail
    const displayDetailForFilm = (idFilm) => {
        navigate("details", { idFilm: idFilm })
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.search_box}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => setSearchText(text)}
                    onSubmitEditing={searchFilm}
                />
                <FlatButton text='search' onPress={searchFilm} />
            </View>
            {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <FilmItem
                    film={item}
                    displayDetailForFilm={displayDetailForFilm}
                />}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (page < totalPages) {
                        loadFilms()
                    }
                }}

            />
            <View style={styles.loading_container}>
                {displayLoading()}
            </View>
            {/* <View style={styles.search_box}>
                <FlatButton text='formulaire' onPress={() => props.navigation.push('formulaire')} />
            </View> */}
        </View>


    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        // marginTop: 30,
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
        // marginRight: 6,
        height: 50,
        padding: 5,
        backgroundColor: "white"
    },
    loading_container: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 55,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


