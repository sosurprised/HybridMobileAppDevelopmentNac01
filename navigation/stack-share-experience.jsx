import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { ShareExperienceForm } from '../screens/share-experience-form/share-experience-form.screen';

const StackShareExperience = createStackNavigator();

function StackShareExperienceScreen() {
    return (
      <StackShareExperience.Navigator> 
        <StackShareExperience.Screen 
          name="ShareExperienceForm" 
          component={ShareExperienceForm} 
          options= {({ navigation }) => ({
            headerTitle: "",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                  title='Menu' 
                  iconName='ios-menu'
                  onPress={() => { navigation.toggleDrawer() }}/>
            </HeaderButtons>
            )
          }
          )}
          />
     </StackShareExperience.Navigator> 
    );
  }

  export default StackShareExperienceScreen;