import * as React from 'react';
import { View } from 'react-native';
import { MenuButton } from '../../components/buttons/menu-button/menu-button';
import { globalStyles } from '../../App';

export function Menu() {
  return (
    <View style={ globalStyles.container }>
        <View>
            <MenuButton title="Compartilhe sua experiência"/>
        </View>
            <View>
            <MenuButton title="Artigos"/>
        </View>
            <View>
            <MenuButton title="Relatos"/>
        </View>
        <View>
            <MenuButton title="Cursos de capacitação"/>
        </View>
        <View>
            <MenuButton title="Seu perfil"/>
        </View>
        <View>
            <MenuButton title="Fale conosco"/>
        </View>
    </View>
  );
}
