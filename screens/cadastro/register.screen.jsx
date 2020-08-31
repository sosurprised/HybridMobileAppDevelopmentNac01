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
            name: userInputs.inputName, 
            surname: userInputs.inputSurname, 
            dateBirth: userInputs.inputDateBirth, 
            document: userInputs.inputTypeDocument,
            graduationYear: userInputs.inputGraduationYear,
            especialization: userInputs.inputEspecialization,
            email: userInputs.inputEmail,
            password:  userInputs.inputPassword,
        };
        fetch("https://davida-7c9c3.firebaseio.com/users.json", { 
            method: 'POST', 
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => { console.log("informações salvas", response.json()) 
        });
        navigation.navigate('Success');
    }

    return (      
        <View style={globalStyles.container}>
            {!passStep &&
            <>
                <View>
                    <FormInput label="Nome" 
                    value={userInputs.inputName} 
                    onChangeInput={(text) => setUserInputs({inputName: text})} />          
                </View>
                <View>
                    <FormInput label="Sobrenome" 
                    value={userInputs.inputSurname} 
                    onChangeInput={(text) => setUserInputs({inputSurname: text})} />          
                </View>
                <View>
                    <FormInput label="Data de nascimento" 
                    value={userInputs.inputDateBirth} 
                    onChangeInput={(text) => setUserInputs({inputDateBirth: text})} />          
                </View>
                <View>
                    <FormInput label="CFM/CRM/COREN"  
                    value={userInputs.inputDocument} 
                    onChangeInput={(text) => setUserInputs({inputDocument: text})}/>          
                </View>
                <View>
                    <FormInput label="Ano da formação" 
                    value={userInputs.inputGraduationYear} 
                    onChangeInput={(text) => setUserInputs({inputGraduationYear: text})} />        
                </View>
                <View>
                    <FormInput label="Especialização"  
                    value={userInputs.inputEspecialization} 
                    onChangeInput={(text) => setUserInputs({inputEspecialization: text})}/>          
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
            onChangeInput={(text) => setUserInputs({inputEmail: text})}/>          
        </View>  
        <View>
            <FormInput label="Senha"  
            value={userInputs.inputPassword} 
            onChangeInput={(text) => setUserInputs({inputPassword: text})}/>          
        </View>  
        <View>
            <FormInput label="Confirmação da senha"  
            value={userInputs.inputPasswordConfirmation} 
            onChangeInput={(text) => setUserInputs({inputPasswordConfirmation: text})}/>       
        </View>  
        <View style={styles.button}>
            <PrimaryButton title="Concluir" onPress={() => { onRegister() } }/>
        </View>
         </>
        }    
        </View>
    );
}
