import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Colors from '../constants/Colors';

const ProductCard = props => {
    return (
        <View style={ styles.container }>
            <Card image={ { uri: props.img } }>
                <View style={ styles.details }>
                    <Text style={ styles.title }>{ props.title }</Text>
                    <Text style={ styles.price }>${ props.price }</Text>
                </View>
                <Button title='Add to cart' containerStyle={ styles.bContainer } buttonStyle={ styles.button } titleStyle={ styles.bTitle } onPress={ props.onAddToCart } />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    details: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    button: {
        borderWidth: 0,
        backgroundColor: Colors.primary
    },
    bContainer: {
        alignSelf: "flex-end"
    },
    bTitle: {
        fontSize: 16,
    }
});

export default ProductCard;
