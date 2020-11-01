import React, { useState, useEffect } from 'react';
import { Listing } from '../../components/listing/listing';
import { EXPERIENCES } from '../../data/dummy-data';
import { Experience } from '../../assets/images/Images';
import { View, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListingCard } from '../../components/listing-card/listing-card';

export function ListingExperiences (props) {
    const navigation = useNavigation();
    const [experiencesList, setExperiencesList] = useState([]);

    useEffect(() => {
        fetch(
            'https://davida-database.firebaseio.com/experiences.json'
          )
            .then(response => response.json())
            .then(responseData => {
              const loadedExperiences = [];
              for (const key in responseData) {
                loadedExperiences.push({
                  id: key,
                  title: responseData[key].title,
                  text: responseData[key].text
                });
              }
              setExperiencesList(loadedExperiences);
            });
    }, [])

    return (
        <View>
          <Image source={Experience} />    
          <ScrollView>
              {
                  experiencesList.map((item, index) =>
                      <ListingCard key={index} title={item.title}  onPress={ () => navigation.navigate(
                        'Reading', {itemId: item.id, data: item})} />        
                  )
              }
          </ScrollView>
        </View>
    );
}

