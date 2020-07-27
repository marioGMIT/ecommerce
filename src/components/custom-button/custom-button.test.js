import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from './custom-button.component'

describe('CustomButton component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CustomButton name="Dealer" label={3}/>);
  });

  it('should render CustomButton component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});