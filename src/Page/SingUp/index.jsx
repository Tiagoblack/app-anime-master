import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {StatusBar} from 'expo-status-bar'
import {useNavigation} from '@react-navigation/native';
import { Ionicons, Entypo,MaterialIcons} from '@expo/vector-icons';

import {Container
    ,CustomButton
    , Buttons
    , Inputs
    , SingInButton
    , SingInText
    ,InputContainer
    
    ,} from './style'

    

export default  function SingIn (){

    const navigator = useNavigation();
    
    const [securyText, setSecuryText] = useState(false)
 
    const handleNavigateSingIn = () =>{
        navigator.goBack('SingIn')
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
                        duration={2000}
                        loop={false}

                    />
                <InputContainer>
                    <Inputs placeholder="Digite seu Nome"/>
                    <MaterialIcons name="drive-file-rename-outline" size={28} color="#fff" />
            </InputContainer>
            <InputContainer>
                <Inputs placeholder="Digite seu Email"/>
                 <Ionicons name="person-circle-outline" size={28} color="#fff" />
            </InputContainer>
            <InputContainer>
                <Inputs  placeholder="Digite sua senha" secureTextEntry={securyText?false:true}/>
                <Entypo onPress={()=>setSecuryText(!securyText)} name={securyText?"eye":"eye-with-line"} size={26} color="#fff" />
            </InputContainer>
            <SingInButton onPress={handleNavigateHome}>
                <SingInText>Cadastre-se</SingInText>
            </SingInButton>

            <CustomButton onPress={handleNavigateSingIn}>
                <Buttons style={{fontSize:14}}>Não possui uma conta?</Buttons>
                <Buttons 
                style={{color:'#32c2e3', fontWeight:'bold'}}
                >Então Cadastre-se</Buttons>
            </CustomButton>
        </Container>
    );
} 