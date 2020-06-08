import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CollectionOverview from './collections-overview.component'

describe('CollectionOverview component', () => {
    let wrapper;

    const mockStore = configureMockStore();
    const store = mockStore({});

    beforeEach(() => {

        wrapper =shallow(
            <Provider store={store}>
                <CollectionOverview collections={[]}/>
            </Provider>
        );
    });

    it('should render CollectionOverview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});