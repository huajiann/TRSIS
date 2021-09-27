import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from "formik";

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//colors
import {Colors} from './../components/style';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    //Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/style'
import {View} from 'react-native';

//Colors
const {brand, darkLight, primary} = Colors;

//Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style = "dark" />
                <InnerContainer>
                <PageLogo resizeMode = "cover" source = {require('./../assets/img/img1.jpg')} />
                <PageTitle>TRSIS</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik 
                        initialValues = {{email: '', password: ''}}
                        onSubmit = {(values) => {
                            console.log(values);
                            navigation.navigate("Welcome");
                        }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput 
                        label = "Email Address"
                        icon = "mail"
                        placeholder = "your.email@gmail.com"
                        placeholderTextColor = {darkLight}
                        onChangeText = {handleChange('email')}
                        onBlur = {handleBlur('email')}
                        value = {values.email}
                        keyboardTypes = "email-address"
                        />

                        <MyTextInput 
                        label = "Password"
                        icon = "lock"
                        placeholder = "* * * * * * * *"
                        placeholderTextColor = {darkLight}
                        onChangeText = {handleChange('password')}
                        onBlur = {handleBlur('password')}
                        value = {values.password}
                        secureTextEntry = {hidePassword}
                        isPassword = {true}
                        hidePassword = {hidePassword}
                        setHidePassword = {setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress = {handleSubmit}> 
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line/> 
                        <StyledButton google={true} onPress = {handleSubmit}> 
                                <Fontisto name="google" color={primary} size={25} />
                            <ButtonText google={true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink onPress = {() => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );

};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name = {icon} size = {30} colors = {brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput{...props} />
        {isPassword && (
            <RightIcon onPress = {() => setHidePassword(!hidePassword)} >
                <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color = {darkLight} />
            </RightIcon>
        )}
    </View>
    )
}

export default Login;
