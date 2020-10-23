import React from 'react';
import { styles } from './listing.style';
import { View, Image, ScrollView } from 'react-native';
import { ListingCard } from '../listing-card/listing-card';

export function Listing (props) {
  return (
      <View>
        <Image source={props.imgSource} />    
        <ScrollView>
            {
                props.data.map((item, index) =>
                    <ListingCard key={index} title={item.title}/>        
                )
            }
        </ScrollView>
      </View>
  );
}

