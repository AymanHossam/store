import React from 'react'
import { View, StyleSheet, Button, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import CartItem from '../components/CartItem.js';
import Colors from '../constants/Colors.js';

const CartScreen = () => {

  const cartItems = useSelector(state => {
    let transformedCartItem = []
    for (let key in state.cart.items) {
      transformedCartItem.push({
        productID: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        img: state.cart.items[key].productImg,
        sum: state.cart.items[key].sum
      })
    } return transformedCartItem.sort((a, b) => a.productID > b.productID)
  }
  )
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <View style={ styles.background }>
      <FlatList
        data={ cartItems }
        keyExtractor={ item => item.productID }
        ListFooterComponent={ () => {
          return <View style={ styles.container }>
            <View style={ styles.total }>
              <View style={ styles.row }>
                <Text style={ styles.totalTxt }>Total: </Text>
                <Text style={ styles.totalNum }> ${ totalAmount.toFixed(2) }</Text>
              </View>
              <Button title='Order now' onPress={ () => { } } disabled style={ { backgroundColor: Colors.primary } } />
            </View>
          </View>
        } }
        renderItem={ ({ item }) => {
          return <View style={ { justifyContent: 'center' } }>
            <CartItem
              image={ item.img }
              quantity={ item.quantity }
              title={ item.productTitle }
              sum={ item.sum }
            />
          </View>
        } }></FlatList>

    </View>
  )
}

CartScreen.navigationOptions = () => {
  return {
    headerTitle: 'Cart'
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  container: {
    margin: 20,
    height: 60,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    elevation: 5,

  },
  total: {
    flexDirection: 'row',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  totalNum: {
    fontSize: 16,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'

  },
  image: {
    height: '100%',
    width: '100%',
  },
  info: {
    alignItems: "center",
    height: '15%',
    padding: 10

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20

  }
})


export default CartScreen