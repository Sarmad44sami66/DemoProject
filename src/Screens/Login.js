import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Eye, EyeActive } from '../assets/';
import { useIsFocused } from '@react-navigation/native';

const Login = ({ navigation }) => {
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [seePassword, setSeePassword] = useState(true);
    const [passcheck, setPasscheck] = useState('')
    const [emailcheck, setEmailCheck] = useState('')

    const Login = () => {
        if (email == '') {
            console.log('Email is required')
            setEmailCheck('* Email is required')
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                setEmailCheck('Email is Not Correct')
                console.log("* Email is Not Correct");
            }
            else {
                setEmailCheck('')
                console.log("Email is Correct");
                if (password == '') {
                    console.log('* Password is required')
                    setPasscheck('* Password is required')
                } else {

                    let re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{12,16}$/;
                    if (re.test(password) === false) {
                        console.log("Password is Not Correct");
                        setPasscheck('* Password must contain one Upper case,one lower case letter,one digit and length is btw 12-16')
                    } else {
                        setPasscheck('')
                        console.log('Password Correct')
                        AsyncStorage.setItem('AccessToken', 'Login');
                        navigation.replace('Home');

                    }

                }
            }
        }
    }
    return (
        <View style={[styles.mainContainer]}>
            <Text style={styles.title}>Email</Text>
            <View style={[styles.wrapperInput]}>
                <TextInput
                    style={[styles.input]}
                    placeholder={"Enter Email"}
                    onChangeText={(text) => setEmail(text)}
                />

            </View>
            <Text style={styles.wrantitle}>{emailcheck}</Text>
            <Text style={styles.title}>Password</Text>
            <View style={styles.wrapperInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={seePassword}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                    style={styles.wrapperIcon}
                    onPress={() => setSeePassword(!seePassword)}>
                    <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.wrantitle}>{passcheck}</Text>
            <TouchableOpacity
                onPress={() => Login()}
                style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: '100%',
        padding: 5,
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: "400"
    },

    wrapperInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    icon: {
        width: 30,
        height: 24,
    },
    input: {
        padding: 10,
        width: '100%',
    },
    wrapperIcon: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
    wrantitle: {
        color: 'red'
    }
})