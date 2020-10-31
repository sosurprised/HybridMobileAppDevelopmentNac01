import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./register.screen.style.jsx";
import { globalStyles } from '../../App';
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';

export function Register({props}) {
    const [userInputs, setUserInputs] = useState({
        inputName: '',
        inputSurname: '',
        inputDateBirth: '',
        inputDocument: '',
        inputGraduationYear: '',
        inputEspecialization: '',
        inputEmail: '',
        inputPassword: '',
        inputPasswordConfirmation: '',
    });
    const [passStep, setPassStep] = useState(false);
    const navigation = useNavigation();

    function onRegister () {
        const userData = {  
            nome: userInputs.inputName, 
            sobrenome: userInputs.inputSurname, 
            //dataNascimento: userInputs.inputDateBirth, 
            documento: userInputs.inputDocument,
            anoFormacao: userInputs.inputGraduationYear,
            especialidade: userInputs.inputEspecialization,
            admin: false,
            email: userInputs.inputEmail,
            senha: userInputs.inputPassword,
        };
        fetch("https://davida-database.firebaseio.com/user.json", { 
            method: 'POST', 
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => { console.log("informações salvas", response.json()) 
        });

        signUp(userInputs.inputEmail, userInputs.inputPassword);

        navigation.navigate('Success');
    }

    const signUp = (email, password) => {
        const response = fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1-K5BxfATCQNdtH4aS7sdYAy1Gh-ognI',
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
            }
          );
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
      
          const resData = response.json();
          console.log(resData);
    };
      

    return (      
        <View style={styles.container}>
            {!passStep &&
            <>
                <View>
                    <FormInput label="Nome" 
                    value={userInputs.inputName} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputName: text})} />          
                </View>
                <View>
                    <FormInput label="Sobrenome" 
                    value={userInputs.inputSurname} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputSurname: text})} />          
                </View>
                <View>
                    <FormInput label="Data de nascimento" 
                    value={userInputs.inputDateBirth} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputDateBirth: text})} />          
                </View>
                <View>
                    <FormInput label="CFM/CRM/COREN"  
                    value={userInputs.inputDocument} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputDocument: text})}/>          
                </View>
                <View>
                    <FormInput label="Ano da formação" 
                    value={userInputs.inputGraduationYear} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputGraduationYear: text})} />        
                </View>
                <View>
                    <FormInput label="Especialização"  
                    value={userInputs.inputEspecialization} 
                    onChangeInput={(text) => setUserInputs({...userInputs, inputEspecialization: text})}/>          
                </View>
                <View style={styles.button}>
                    <PrimaryButton title="Prosseguir" onPress={() => { setPassStep(true) } }/>
                </View>          
           </>}
        {passStep &&
        <>
        <View>
            <FormInput label="E-mail"  
            value={userInputs.inputEmail} 
            onChangeInput={(text) => setUserInputs({...userInputs, inputEmail: text})}/>          
        </View>  
        <View>
            <FormInput label="Senha"  
            value={userInputs.inputPassword} 
            onChangeInput={(text) => setUserInputs({...userInputs, inputPassword: text})}/>          
        </View>  
        <View>
            <FormInput label="Confirmação da senha"  
            value={userInputs.inputPasswordConfirmation} 
            onChangeInput={(text) => setUserInputs({...userInputs, inputPasswordConfirmation: text})}/>       
        </View>  
        <View style={styles.button}>
            <PrimaryButton title="Concluir" onPress={() => { onRegister() } }/>
        </View>
         </>
        }    
        </View>
    );
}
