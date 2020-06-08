import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import FormInput from './form-input.component'

describe('FormInput component', () => {
    let wrapper;
    let mockHandleChange;

    const mockStore = configureMockStore();
    const store = mockStore({});

    beforeEach(() => {

        mockHandleChange = jest.fn();

        const mockProps = {
            label: 'email',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        }

        wrapper =shallow(
            <Provider store={store}>
                <FormInput {...mockProps}/>
            </Provider>
        );
    });

    it('should render CollectionOverview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handlechange', () => {
        
        wrapper.find('FormInput').dive().find('.form-input').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    });



});