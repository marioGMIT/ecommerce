import React from 'react';
import { shallow } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';

import MenuItem from './menu-item.component'

describe('MenuItem component', () => {

  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'testimage';

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'hats',
      imageUrl
    };

    wrapper = shallow(<Router><MenuItem {...mockProps} /> </Router>);
  });

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

 

});