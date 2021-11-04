import React from 'react'
import {createStackNaviagation} from '@react-navigation/stack';

const MainStack = createStackNaviagation();

export default ()=>{
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Profile" component={ProfileScreen}/>
            <MainStack.Screen name="SingIn" component={SingIn}/>
            <MainStack.Screen name="SingUp" component={SingUoScreen}/>
            <MainStack.Screen name="Home" component={HomeScreem}/>
        </MainStack.Navigator>
    );
}