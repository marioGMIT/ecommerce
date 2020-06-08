import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Directory from './directory.component'

describe('Directory component', () => {
    let wrapper;

    const mockStore = configureMockStore();
    const store = mockStore({});

    beforeEach(() => {

        // wrapper = shallow(<Directory sections={[]} />);

        wrapper =shallow(
            <Provider store={store}>
                <Directory sections={[]}/>
            </Provider>
        );
    });

    it('should render Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});