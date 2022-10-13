import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Platform, Image, ScrollView } from 'react-native'
const banner = require("../assets/salim_banner.png");
const svgImage = require("../assets/pizza-sharing-pana-3989.png");

const Form = () => {
    const [login, setLogin] = useState("banane");
    const [pass, setPass] = useState("******");
    const [connect, setConnect] = useState(false);
    const handleChangeLogin = (e) => {
        setLogin(e)
    }
    const handleChangePass = (e) => {
        setPass(e)
    }
    const click = () => {
        setLogin("")
        setPass("")
        connect ? setConnect(false) : setConnect(true)
    }
    let color = "";
    connect ? color = "#25b782" : color = '#e2232b'
    return (
        <ScrollView>
            <View style={{ ...style.header, backgroundColor: color }}>
                <Text style={style.text}>art sider appliaction</Text>
            </View>
            <View style={style.container}>
                <View style={{ ...style.view, marginBottom: 20, marginTop: 0, overflow: "hidden", backgroundColor: color }}>
                    <Image source={connect ? svgImage : banner}
                        style={{ width: "100%", height: "100%" }}></Image>
                </View>
                <Text>login</Text>
                <TextInput
                    style={style.input}
                    value={login}
                    onChangeText={handleChangeLogin}
                    multiline={false}
                    inlineImageLeft='search_icon'
                />
                <Text>password</Text>
                <TextInput
                    style={style.input}
                    value={pass}
                    onChangeText={handleChangePass}
                    multiline={false}
                    inlineImageLeft='search_icon'
                />
                <View style={{
                    marginVertical: 5,
                    paddingHorizontal: 5
                }}>
                    <Button
                        title={connect ? "connected" : "disconnected"}
                        color={color}
                        accessibilityLabel="Learn more about this purple button"
                        onPress={click}
                    />
                </View>
                <View style={{ ...style.view, backgroundColor: color }}>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                    }}>
                        login : {login}
                    </Text>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                    }}>
                        pass : {pass}
                    </Text>
                </View>
                <View style={{ ...style.view, backgroundColor: color }}>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                    }}>
                        login : {login}
                    </Text>
                    <Text style={{
                        color: "white",
                        fontSize: 20,
                    }}>
                        pass : {pass}
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}
export default Form;

const style = StyleSheet.create({
    header: {
        backgroundColor: "#e2232b",
        height: 100,
        paddingTop: 40,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
        backgroundColor: "white",
        color: "#000",
        margin: 15,
    },
    text: {
        textTransform: "capitalize",
        fontWeight: "600",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    input: {
        borderColor: "#bdbdbd",
        margin: 5,
        borderRadius: 6,
        height: 50,
        paddingLeft: 10,
        borderWidth: 2,
    },
    button: {
        backgroundColor: "#e2232b",
    },
    loader: {
        margin: 30
    },
    view: {
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        height: 100,
        width: "100%",
        backgroundColor: "#e2232b",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#3FF1Fb",

    }
})