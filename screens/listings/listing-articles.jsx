import React, { useEffect, useState } from 'react';
import { Listing } from '../../components/listing/listing';
import { ARTICLES } from '../../data/dummy-data';
import { Article } from '../../assets/images/Images';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView } from 'react-native';
import { ListingCard } from '../../components/listing-card/listing-card';

export function ListingArticles (props) {
    const navigation = useNavigation();
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        fetch(
            'https://davida-database.firebaseio.com/articles.json'
          )
            .then(response => response.json())
            .then(responseData => {
              const loadedArticles = [];
              for (const key in responseData) {
                loadedArticles.push({
                  id: key,
                  title: responseData[key].title,
                  text: responseData[key].text
                });
              }
              setArticlesList(loadedArticles);
            });
    }, [])

    const showTitle = () => {

    }
    
    return (
        <View>
          <Image source={Article} />    
          <ScrollView>
              {
                  articlesList.map((item, index) =>
                      <ListingCard key={index} title={item.title}  onPress={ () => navigation.navigate(
                        'Reading', {itemId: item.id, data: item})} />        
                  )
              }
          </ScrollView>
        </View>
    );
}

