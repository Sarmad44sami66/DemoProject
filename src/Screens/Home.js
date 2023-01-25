import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const Logout = () => {
        console.log('Logout')
        AsyncStorage.clear()
        navigation.navigate('Login')

    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => Logout()}
                style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: '100%',
        padding: 5,
        justifyContent: 'center'
    },
})