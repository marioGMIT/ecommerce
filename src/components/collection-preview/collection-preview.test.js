import React from 'react';
import { shallow } from 'enzyme';

import CollectionPreview from './collection-preview.component'

describe('CollectionPreview component', () => {
  let wrapper;

  beforeEach(() => {

    const mockProps = {
        
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25
            },
            {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
            }          
            
        ]     
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});