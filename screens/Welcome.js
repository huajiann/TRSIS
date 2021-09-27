import React from "react";
import { StatusBar } from 'expo-status-bar';
//import { WelcomeContainer } from "../components/style";



import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/style'


const Welcome = ({navigation}) => {
   
    return (
        <>
            <StatusBar style = "light" />
            <InnerContainer>
                   <WelcomeImage resizeMode = "cover" source = {require('./../assets/img/img2.png')} />   
               <WelcomeContainer>
                   <PageTitle welcome={true}>Welcome to TRSIS!!</PageTitle>
                   <SubTitle welcome={true}>My name :,)</SubTitle>
                   <SubTitle welcome={true}>my.email@gmail.com</SubTitle>
                   <StyledFormArea>
                       <Avatar resizeMode ="cover" source = {require('./../assets/img/img1.jpg')} />   
                       
                       <Line/>
                       <StyledButton onPress = {() => navigation.navigate("Login")}> 
                           <ButtonText>Logout</ButtonText>
                       </StyledButton>
                      
                    </StyledFormArea>
                   
                </WelcomeContainer>
            </InnerContainer>
        </>
    );

};



export default Welcome;
