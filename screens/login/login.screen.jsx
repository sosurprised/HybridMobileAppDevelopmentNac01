import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { styles } from './login.screen.style';
import { globalStyles, AuthContext } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';
import { SecondaryButton } from '../../components/buttons/secondary-button/secondary-button';

export function Login({props}) {
    const navigation = useNavigation();
    const [signUp, setSignUp] = useState(false);
    const [error, setError] = useState();
    const authContext = useContext(AuthContext);

    const loginHandler = () => {
        authContext.isAuth=true;
        console.log(authContext.isAuth);
    };
  
    const [loginInputs, setLoginInputs] = useState({
        inputEmail: '',
        inputPassword: '',
    });

    const login = (email, password) => {
        setError(null);
        try {
            const response = fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1-K5BxfATCQNdtH4aS7sdYAy1Gh-ognI',
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                    })
                }   );

                loginHandler();

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }                       
                const resData = response.json();
                console.log(resData);
                
        } catch (err) {
            setError(err);
        }
      };

      useEffect(() => {
        if(error){
            Alert.alert("Email ou senha inválidos!", [{ text: "OK", onPress: () => console.log("OK Pressed") }]); 
        }
      }, [error])

    return(
        <View style={ styles.container }>
            <View>
                <FormInput label="Email" 
                value={loginInputs.inputEmail} 
                onChangeInput={(text) => setLoginInputs({...loginInputs, inputEmail: text})}
                />          
            </View>
            <View>
                <FormInput label="Senha" 
                value={loginInputs.inputPassword} 
                onChangeInput={(text) => setLoginInputs({...loginInputs, inputPassword: text})}
                 />          
            </View>  
            <View style={ styles.button }>            
                 <PrimaryButton title="Login" onPress={() => {loginHandler()}}/>
            </View>
            <View>
                <Text style={ globalStyles.text }>Ainda não tem cadastro?</Text>
            </View>
            <View style={ styles.button } >
                <SecondaryButton title="Cadastrar-se" onPress={ () => navigation.navigate('Cadastro') } />
            </View>
        </View>
    );
}