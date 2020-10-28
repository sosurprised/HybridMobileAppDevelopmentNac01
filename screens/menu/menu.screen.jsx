import * as React from 'react';
import { View } from 'react-native';
import { MenuButton } from '../../components/buttons/menu-button/menu-button';
import { globalStyles } from '../../App';
import { useNavigation } from '@react-navigation/native';

export function Menu() {
    const navigation = useNavigation();
    return (
        <View style={ globalStyles.container }>
            <View>
                <MenuButton title="Compartilhe sua experiência" onPress={ () => navigation.navigate('ShareExperienceForm') } />
            </View>
                <View>
                <MenuButton title="Artigos" onPress={ () => navigation.navigate('ListingArticles') } />
            </View>
                <View>
                <MenuButton title="Relatos" onPress={ () => navigation.navigate('ListingExperiences') } />
            </View>
            <View>
                <MenuButton title="Cursos de capacitação"/>
            </View>
            <View>
                <MenuButton title="Seu perfil" onPress={ () => navigation.navigate('Profile') } />
            </View>
            <View>
                <MenuButton title="Fale conosco"/>
            </View>
        </View>
    );
}
