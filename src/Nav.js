/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Colors from './constants/Colors';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator()


const Nav = () => {

    const isLoggedin = useSelector(state => !!state.auth.userId)
    if (isLoggedin) {
        return <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name='Home' component={ HomeScreen } options={ { headerTintColor: 'white', headerStyle: { backgroundColor: Colors.primary } } } />
                <MainStack.Screen name='Cart' component={ CartScreen } options={ { headerTintColor: 'white', headerLeftContainerStyle: { color: 'white' }, headerStyle: { backgroundColor: Colors.primary } } } />
            </MainStack.Navigator>
        </NavigationContainer >

    }

    return <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name='Login' component={ LoginScreen } options={ { headerShown: false } } />
            <AuthStack.Screen name='Signup' component={ RegisterScreen } options={ { headerStyle: { elevation: 0, shadowOpacity: 0 }, headerTitle: 'Sign up' } } />
        </AuthStack.Navigator>
    </NavigationContainer>;
};

export default Nav;
