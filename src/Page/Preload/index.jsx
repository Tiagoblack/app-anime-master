import React from 'react';
import {StatusBar} from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native'
import {
    Container,  
    Image,
    Loading
} from './style'
export default  function PreLoad (){

    const naviagator = useNavigation();
    setTimeout(()=>{
        naviagator.navigate('SingIn')
    },100)
    return(
        <Container>
            <StatusBar style="light" backgroundColor="#333"/>
            <LottieView
            source={require('../../assests/img/Preload.json')}
            style={{height:120, width:400}}
            autoPlay
            loop
            />
            <Loading 
                size={32}
                color="#fff"            
            />
        </Container>
    );
} 