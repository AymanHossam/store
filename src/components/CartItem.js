import React from 'react'
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from '../constants/Colors';

const CartItem = (props) => {

    return (<View>
        <View style={ styles.container }>
            <View style={ styles.data }>
                <View style={ styles.imgContainer }>
                    <Image source={ { uri: props.image } } style={ styles.img } />
                </View>
                <Text style={ styles.quantity }>{ props.quantity }</Text>
                <Text>{ props.title }</Text>
            </View>
            <View style={ styles.data }>
                <Text style={ styles.quantity }>${ props.sum.toFixed(2) } </Text>
            </View>
        </View>
        <View style={ styles.divider } />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: 'white',
    },
    imgContainer: {
        height: 60,
        width: 60,
        marginRight: 5
    },
    img: {
        height: '100%',
        width: '100%'
    },
    data: {
        flexDirection: "row",
        alignItems: 'center'
    },

    quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: Colors.primary

    },
    divider: {
        borderWidth: 0.2,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 5
    }
})

export default CartItem