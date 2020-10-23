import React from 'react';
import { Listing } from '../../components/listing/listing';
import { EXPERIENCES } from '../../data/dummy-data';
import { Experience } from '../../assets/images/Images';

export function ListingExperiences (props) {
  return (
    <Listing data={EXPERIENCES} imgSource={Experience}/>
  );
}

