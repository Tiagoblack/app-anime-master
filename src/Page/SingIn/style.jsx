import React from 'react'
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    background-color:#333 ;

`;
export const AreaInput = styled.View`

    width: 100%;
    height: 300px;

`;
export const CustomButton = styled.TouchableOpacity`

    flex-direction: row;
    margin-top: 30px;

`;
export const  Buttons = styled.Text`
    margin-left: 5px;
    

`;
export const InputContainer = styled.View`
    flex-direction: row;
    height: 45px;
    width: 100%;
    background-color: #777;
    margin-bottom: 10px;
    border-radius: 30px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;

`;
export const  Inputs = styled.TextInput`
   height: 100%;
   width:100%;
   padding: 0;
   margin: 0;

`;
export const  SingInButton = styled.TouchableOpacity`
    height: 40px;
    width: 100%;
    background-color: #121212;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: #777;

`;
export const  SingInText = styled.Text`
    color: #777;
    text-transform: uppercase;
    font-weight: bold;


`;