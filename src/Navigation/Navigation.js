import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import FilmDetail from '../components/FilmDetail';
import Form from '../components/Form'
import Search from '../components/Search'


const { Navigator, Screen } = createNativeStackNavigator()



const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Search} />
                <Screen name='formulaire' component={Form} />
                <Screen name='details' component={FilmDetail} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation;