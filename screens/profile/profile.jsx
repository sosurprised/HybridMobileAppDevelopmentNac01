import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { typographyStyles } from '../../components/typography/typography.styles';
import { Typography } from '../../components/typography/typography';
import { styles } from '../profile/profile.style';
import { AuthContext } from '../../context/auth-context';

export function Profile({props}) {
    const authContext = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({ nome: '', sobrenome: '', email: '', especialidade: ''});
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch(
            'https://davida-database.firebaseio.com/user.json'
          )
            .then(response => response.json())
            .then(responseData => {
                const loadedUsers = [];
                for (const key in responseData) {
                    loadedUsers.push({
                    id: key,
                    email: responseData[key].email,
                    especialidade: responseData[key].especialidade,
                    nome: responseData[key].nome,
                    sobrenome: responseData[key].sobrenome
                  });
                }
                setUserList(loadedUsers);    
              const currentUserLoaded = loadedUsers.filter(x => x.id === "-ML0PojDxlAm91SF0WWj")[0];
              console.log(currentUserLoaded);

              setCurrentUser({
                  nome: currentUserLoaded.nome,
                  sobrenome: currentUserLoaded.sobrenome,
                  email: currentUserLoaded.email,
                  especialidade: currentUserLoaded.especialidade,
              });
            });
    }, [])

    return(
        <View style={globalStyles.container}>
            <View style={styles.container}> 
                <View style={styles.textGroup}>
                    <Typography text="Nome:" style={typographyStyles.white18}/>   
                    <Typography text={currentUser.nome + " " + currentUser.sobrenome} style={typographyStyles.white28}/>  
                </View>  
                <View style={styles.textGroup}>   
                    <Typography text="Especialização:" style={typographyStyles.white18}/>
                    <Typography text={currentUser.especialidade} style={typographyStyles.white28}/>
                </View>        
                <View style={styles.textGroup}>      
                    <Typography text="E-mail:" style={typographyStyles.white18}/>     
                    <Typography text={currentUser.email} style={typographyStyles.white28}/>   
                </View>
                <View style={styles.textGroup}>
                    <Typography text="UF:" style={typographyStyles.white18}/>     
                    <Typography text="SP" style={typographyStyles.white28}/>   
                </View>
                <View style={styles.textGroup}>
                    <Typography text="Cidade:" style={typographyStyles.white18}/>     
                    <Typography text="São Paulo" style={typographyStyles.white28}/> 
                </View>
            </View>
        </View>        
    )};