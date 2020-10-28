import React from 'react';
import { Listing } from '../../components/listing/listing';
import { ARTICLES } from '../../data/dummy-data';
import { Article } from '../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView } from 'react-native';
import { ListingCard } from '../../components/listing-card/listing-card';

export function ListingArticles (props) {
    const navigation = useNavigation();
   
    return (
        <View>
          <Image source={Article} />    
          <ScrollView>
              {
                  ARTICLES.map((item, index) =>
                      <ListingCard key={index} title={item.title}  onPress={ () => navigation.navigate(
                        'Reading', {itemId: item.id, data: item})} />        
                  )
              }
          </ScrollView>
        </View>
    );
}

