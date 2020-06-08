import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Header from './header.component'

describe('Header component', () => {
    let wrapper;
    let mockHandleChange;

    const mockStore = configureMockStore();
    const store = mockStore({});

    beforeEach(() => {

        let mockSetCurrentUser = jest.fn();

        const mockProps = {
            hidden: true,
            // currentUser: 1,
            handleChange: mockSetCurrentUser
        }

        wrapper =shallow(
            <Provider store={store}>
                <Header {...mockProps}/>
            </Provider>
        );
    });

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // describe('if currentUser is present', () => {

        
    //     it('should render sign out link', () => {
    //         // let hola = wrapper.find('Header');
    //     console.log(wrapper.html());
    //     //   expect(
    //     //     wrapper
    //     //       .find('Header').dive().find('.options').dive('Link')
    //     //       .at(3)
    //     //       .text()
    //     //   ).toBe('SIGN OUT');
    //     });
    // });

    // it('should call setCurrentUser', () => {
        
    //     wrapper.find('Header').dive().find('.form-input').simulate('change');
    //     expect(mockHandleChange).toHaveBeenCalled();
    // });



});