import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { ListingExperiences } from '../screens/listings/listing-experiences';
import { Reading } from '../screens/reading/reading.screen';

const StackExperiences = createStackNavigator();

function StackExperiencesScreen(props) {
    return (
        <StackExperiences.Navigator initialRouteName="ListingExperiences"> 
          <StackExperiences.Screen
            name="ListingExperiences"
            component={ListingExperiences}
            options= {({ navigation }) => ({
              headerTitle: "Relatos",
              headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item 
                    title='Menu' 
                    iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }}/>
              </HeaderButtons>
              )}
            )}
          />
          <StackExperiences.Screen 
            name="Reading" 
            component={Reading}
            options={{
              headerTitle: ""
            }} />
        </StackExperiences.Navigator> 
    );
  }

  export default StackExperiencesScreen;