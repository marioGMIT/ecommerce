import React from 'react';
import { shallow } from 'enzyme';

import {CollectionItem} from './collection-item.component'
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

// import { CheckoutItem } from './checkout-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;

  beforeEach(() => {
    mockAddItem = jest.fn();    

    const mockProps = {
      item: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add an item when add to cart is clicked', () => {
    wrapper
      .find('CustomButton')
      .simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

});