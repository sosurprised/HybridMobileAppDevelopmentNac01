import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./share-experience-form.style";
import { globalStyles } from '../../App';
import { FormInput } from "../../components/text-input/text-input";
import { PrimaryButton } from '../../components/buttons/primary-button/primary-button';
import { TextArea } from '../../components/text-area/text-area';
import { Typography } from '../../components/typography/typography';
import { typographyStyles } from '../../components/typography/typography.styles';

export function ShareExperienceForm({props}) {
    const [experienceInputs, setExperienceInputs] = useState({
        title: '',
        topic: '',
        text: '',
        userId: '',
    });

    //const navigation = useNavigation();

    // function onRegister () {
    //     const experienceData = {  
    //         name: userInputs.inputName, 
    //         surname: userInputs.inputSurname, 
    //         dateBirth: userInputs.inputDateBirth, 
    //         document: userInputs.inputDocument,
    //         graduationYear: userInputs.inputGraduationYear,
    //         especialization: userInputs.inputEspecialization,
    //         email: userInputs.inputEmail,
    //         password:  userInputs.inputPassword,
    //     };
    //     fetch("https://davida-7c9c3.firebaseio.com/users.json", { 
    //         method: 'POST', 
    //         body: JSON.stringify(userData),
    //         headers: { 'Content-Type': 'application/json' }
    //     }).then(response => { console.log("informações salvas", response.json()) 
    //     });
    //     navigation.navigate('Success');
    // }

    return (      
        <View style={globalStyles.container}>
            <View style={styles.title}>
            <Typography style={typographyStyles.white24}
                text='Conte para nós da sua experiência de trabalho com doação de órgãos!' />
            </View>
            <View style={styles.input}>
                <FormInput label="Tema do relato" 
                value={experienceInputs.topic} 
                onChangeInput={(e) => setExperienceInputs({...experienceInputs, topic: e})} />          
            </View>
            <View style={styles.input}>
                <FormInput label="Título do relato" 
                value={experienceInputs.title} 
                onChangeInput={(e) => setExperienceInputs({...experienceInputs, title: e})} />          
            </View>
            <View style={styles.input}>
                <TextArea placeholder="Seu relato" 
                value={experienceInputs.text} 
                onChangeInput={(e) => setExperienceInputs({...experienceInputs, text: e})} />          
            </View>
            <View style={styles.button}>
                <PrimaryButton title="Enviar"/>
            </View>          
        </View>
    );
}
