import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/buttons/header-button/header-button';
import { Reading } from '../screens/reading/reading.screen';
import { ListingArticles } from '../screens/listings/listing-articles';

const StackArticles = createStackNavigator();

function StackArticlesScreen() {
    return (
      <StackArticles.Navigator initialRouteName="ListingArticles"> 
        <StackArticles.Screen 
          name="Reading" 
          component={Reading} 
          options={{
            headerTitle: "",
          }}
          />
        <StackArticles.Screen 
          name="ListingArticles" 
          component={ListingArticles} 
          options={{
            headerTitle: "Artigos",
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item 
                    title='Menu' 
                    iconName='ios-menu'
                    onPress={() => { navigation.toggleDrawer() }}/>
              </HeaderButtons>
              )
          }}/>
     </StackArticles.Navigator> 
    );
  }

  export default StackArticlesScreen;
  