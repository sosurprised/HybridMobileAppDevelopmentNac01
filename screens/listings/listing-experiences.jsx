import React from 'react';
import { Listing } from '../../components/listing/listing';
import { EXPERIENCES } from '../../data/dummy-data';
import { Experience } from '../../assets/images/Images';
import { View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListingCard } from '../../components/listing-card/listing-card';

export function ListingExperiences (props) {
    const navigation = useNavigation();

    return (
        <View>
          <Image source={Experience} />    
          <ScrollView>
              {
                  EXPERIENCES.map((item, index) =>
                      <ListingCard key={index} title={item.title}  onPress={ () => navigation.navigate(
                        'Reading', {itemId: item.id, data: item})} />        
                  )
              }
          </ScrollView>
        </View>
    );
}

