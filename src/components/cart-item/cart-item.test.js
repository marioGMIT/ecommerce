import { shallow, mount, render } from 'enzyme';
import CartItem from './cart-item.component';

import React from 'react';

const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 2
  };

it('Rendering CartItem component', () => {
    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot()
})