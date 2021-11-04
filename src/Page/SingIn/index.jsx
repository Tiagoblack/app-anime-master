import React from 'react';
import LottieView from 'lottie-react-native';
import {StatusBar} from 'expo-status-bar'
import {useNavigation} from '@react-navigation/native'

import {Container
    ,CustomButton
    , Buttons
    , Inputs
    , SingInButton
    , SingInText
    
    ,} from './style'

    

export default  function SingIn (){

    const navigator = useNavigation();
    const handleNavigateSingUp = () =>{
        navigator.navigate('SingUp')
    }

    const handleNavigateHome = () =>{
        navigator.navigate('Home')
    }

    return(
        <Container>
                <StatusBar style="light" backgroundColor="#333a"/>

                    <LottieView
                        source={require('../../assests/img/Login.json')}
                        autoPlay
                        autoSize
                        style={{height:120, width:400, marginBottom:20}}
                        resizeMode="contain"                    
                    />

                <Inputs placeholder="Digite seu Email"/>
                <Inputs  placeholder="Digite sua senha" securyEntre/>
            <SingInButton onPress={handleNavigateHome}>
                <SingInText>Logar</SingInText>
            </SingInButton>

            <CustomButton onPress={handleNavigateSingUp}>
                <Buttons>Não possui uma conta?</Buttons>
                <Buttons 
                style={{color:'#32c2e3'}}
                >Então faça login</Buttons>
            </CustomButton>
        </Container>
    );
} 