import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';


import PreLoadScreen from '../Page/Preload';
import SingInScreen from '../Page/SingIn';
import SingUpScreen from '../Page/SingUp';
import HomeScreen from '../Page/Home';


const MainStack = createStackNavigator();


export default function MainStacks (){
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="PreLoad" component={PreLoadScreen} options={{
                headerShown:false
            }}/>
            <MainStack.Screen name="SingIn" component={SingInScreen} options={{
                headerShown:false
            }}/>
            <MainStack.Screen name="SingUp" component={SingUpScreen} options={{
                headerShown:false,
            }}/>
            <MainStack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerShown:false
                }}            
            />
        </MainStack.Navigator>
    );
}