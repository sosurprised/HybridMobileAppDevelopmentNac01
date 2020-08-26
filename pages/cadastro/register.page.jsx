import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native'
import { styles } from "./register.page.style";
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';

export function Register(props) {
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputsurname] = useState("");
    const [inputDateBirth, setInputDateBirth] = useState("");
    const [inputTypeDocument, setInputTypeDocument] = useState("");
    const [inputGraduationYear, setInputGraduationYear] = useState("");
    const [inputEspecialization, setInputExpecialization]=useState("");

    function onRegister () {
        const userData = {  
            name: inputName, 
            surname: inputSurname, 
            dateBirth: inputDateBirth, 
            typeDocument: inputTypeDocument,
            graduationYear: inputGraduationYear,
            especialization: inputEspecialization 
        };
        fetch("https://davida-7c9c3.firebaseio.com/users.json", { 
            method: 'POST', 
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => { console.log("informações salvas", response.json()) 
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View>
                <FormInput label="Nome" 
                value={inputName} 
                onChangeInput={(text) => setInputName(text) } />          
            </View>
            <View>
                <FormInput label="Sobrenome" 
                value={inputSurname} 
                onChangeInput={(text) => setInputsurname(text)} />          
            </View>
            <View>
                <FormInput label="Data de nascimento" 
                value={inputDateBirth} 
                onChangeInput={(text) => setInputDateBirth(text)} />          
            </View>
            <View>
                <FormInput label="CFM/CRM/COREN"  
                value={inputTypeDocument} 
                onChangeInput={(text) => setInputTypeDocument(text)} />          
            </View>
            <View>
                <FormInput label="Ano da formação" 
                value={inputGraduationYear} 
                onChangeInput={(text) => setInputGraduationYear(text)} />        
            </View>
            <View>
                <FormInput label="Especialização"  
                value={inputEspecialization} 
                onChangeInput={(text) => setInputExpecialization(text)}/>          
            </View>
            <View style={styles.button}>
                <PrimaryButton title="Prosseguir" onPress={() => { onRegister() } }
        />
            </View>
        </View>
    );
}