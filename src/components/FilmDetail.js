import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../../api/TMDBApi'
import dayjs from 'dayjs'
import numeral from 'numeral'

const FilmDetail = (props) => {
    const { params } = props.route
    const [isLoading, setIsLoading] = useState(true)
    const [film, setFilm] = useState(undefined)

    useEffect(() => {
        getFilmDetailFromApi(params.idFilm).then(data => {
            setFilm(data)
            setIsLoading(false)
        })
    }, [])
    return (
        <View style={styles.main_container}>
            {
                film != undefined && <ScrollView>
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFromApi(film.poster_path) }}
                    />
                    <Text style={styles.title}>{film.title}</Text>
                    <Text style={styles.description}>{film.overview}</Text>
                    <Text style={styles.default_text}>Sorti le {dayjs(new
                        Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
                    <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
                    <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
                    <Text style={styles.default_text}>Genre(s) : {film.genres.map(function (genre) {
                        return genre.name;
                    }).join(" / ")}
                    </Text>
                    <Text style={styles.default_text}>Companie(s) :
                        {film.production_companies.map(function (company) {
                            return company.name;
                        }).join(" / ")}
                    </Text>
                </ScrollView>
            }
            {
                isLoading && <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color="#F01D71" />
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 250,
        margin: 5,
        backgroundColor: 'gray'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'

    },
    description: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15,
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }

})
export default FilmDetail;
