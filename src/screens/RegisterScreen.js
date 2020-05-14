/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as authActions from '../store/actions/authActions'

import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import CustomInput from '../components/Input';

const RegisterScreen = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if (errorMessage) {
            alert(errorMessage)
        }
    }, [errorMessage])


    let authHandler = async () => {
        setErrorMessage(null)
        setIsLoading(true)
        try {
            await dispatch(authActions.signup(email, name, password))
        } catch (error) {
            setIsLoading(false)
            setErrorMessage('Something went wrong!')
        }
    }

    return (
        <KeyboardAvoidingView
            style={ styles.container }
        >
            <ScrollView style={ styles.container }>
                <View style={ styles.inputContainer }>
                    <CustomInput
                        leftIcon={ <Entypo
                            name='mail'
                            size={ 24 }
                            color='grey'
                        /> }
                        placeholder="Email"
                        value={ email }
                        onChangeText={ setEmail }
                        type='emailAddress'
                        email
                        errorMsg='Please enter a valid email!'
                    />
                    <Divider style={ styles.divider } />
                    <CustomInput
                        leftIcon={ <Entypo
                            name='user'
                            size={ 24 }
                            color='grey'
                        /> }
                        placeholder="Account"
                        value={ name }
                        onChangeText={ setName }
                        type='name'
                        minLength={ 4 }
                        required
                        errorMsg='Please enter a valid name!' />
                    <Divider style={ styles.divider } />
                    <CustomInput
                        leftIcon={ <MaterialIcons
                            name='lock'
                            size={ 24 }
                            color='grey'
                        /> }
                        placeholder="Password"
                        value={ password }
                        onChangeText={ setPassword }
                        secureTextEntry
                        passwordRules
                        type='password'
                        minLength={ 6 }
                        required
                        errorMsg='Please enter a valid password!' />
                </View>
                <Button title='Create a new account' buttonStyle={ styles.button } titleStyle={ styles.bTitle } onPress={ authHandler } loading={ isLoading } />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    inputContainer: {
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: 'grey',
        backgroundColor: Colors.secondary
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 20
    },
    button: {
        borderRadius: 5,
        borderColor: 'white',
        marginHorizontal: 12,
        marginVertical: 5,
        backgroundColor: Colors.primary
    },
    bTitle: {
        fontSize: 20
    },
});

export default RegisterScreen;
