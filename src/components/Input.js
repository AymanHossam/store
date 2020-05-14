/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const CustomInput = (props) => {


    const [isValid, setIsValid] = useState(true)


    const checkValidity = text => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (props.min != null && +text < props.min) {
            isValid = false;
        }
        if (props.max != null && +text > props.max) {
            isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false;
        }
        setIsValid(isValid)
    };

    return (
        <View style={ styles.inputContainer }>
            <Input
                { ...props }
                onEndEditing={ () => checkValidity(props.value) }
                onFocus={ () => setIsValid(true) }
                textContentType={ props.type }
                leftIconContainerStyle={ styles.icon }
                inputContainerStyle={ styles.input }
            />
            { !isValid && <Text style={ styles.emailError }>{ props.errorMsg }</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        borderBottomWidth: 0,
        marginTop: 10
    },
    icon: {
        marginRight: 10
    },
    emailError: {
        color: 'red',
        marginHorizontal: 20
    }
});

export default CustomInput;
