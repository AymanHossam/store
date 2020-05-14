import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useDispatch } from "react-redux";

import products from '../data/4.1 dummy-data.js.js'
import ProductCard from '../components/ProductCard.js'
import { Button } from 'react-native-elements'
import Colors from '../constants/Colors.js'
import * as CartActions from '../store/actions/cartActions'


export const HomeScreen = ({ navigation }) => {

    let dispatch = useDispatch()

    return <View style={ styles.container }>
        <FlatList
            data={ products }
            keyExtractor={ (product) => product.id }
            renderItem={ ({ item }) => {
                return <ProductCard img={ item.imageUrl } title={ item.title } price={ item.price } onAddToCart={ () => dispatch(CartActions.addToCart(item)) } />
            } } />
        <Button title='Go to cart' buttonStyle={ styles.cartButton } onPress={ () => navigation.navigate('Cart') } />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cartButton: {
        backgroundColor: Colors.primary
    }
})

export default HomeScreen