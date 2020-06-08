import React, { PureComponent } from 'react'


import userReducer from './user/user.reducer';
import { UserActionTypes } from './user/user.types';

import cartReducer from './cart/cart.reducer';
import CartActionTypes from './cart/cart.types';
import { addItemToCart, removeItemFromCart } from './cart/cart.utils';



import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


describe('User Reducer', () => {

    const INITIAL_STATE_USER = {
        currentUser: null
    };

    it('should return initial state ', () => {
        expect( userReducer(INITIAL_STATE_USER,{}) ).toEqual({currentUser: null}, {})
    });

    it('should handle an action ', () => {
        expect( userReducer(
            INITIAL_STATE_USER,
            {
                type: UserActionTypes.SET_CURRENT_USER,
                payload: 'abc'
            }
        ) ).toEqual({currentUser: 'abc'})
    });
    
});


describe('Cart Reducer', () => {

    const INITIAL_STATE_CART = {
        hidden: true,
        cartItems: []
      };
    
    const NEW_ITEM = {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
    }

    it('should return initial state ', () => {
        expect( cartReducer(INITIAL_STATE_CART,{}) ).toEqual({hidden: true, cartItems: []}, {})
    });

    it('should handle TOGGLE_CART_HIDDEN action ', () => {
        expect( cartReducer(
            INITIAL_STATE_CART,
            {
                type: CartActionTypes.TOGGLE_CART_HIDDEN,
                payload: !INITIAL_STATE_CART.hidden
            }
        ) ).toEqual({hidden: !INITIAL_STATE_CART.hidden, cartItems: []})
    });

    it('should handle TOGGLE_CART_HIDDEN action ', () => {
        expect( cartReducer(
            INITIAL_STATE_CART,
            {
                type: CartActionTypes.TOGGLE_CART_HIDDEN,
                payload: !INITIAL_STATE_CART.hidden
            }
        ) ).toEqual({hidden: !INITIAL_STATE_CART.hidden, cartItems: []})
    });

    it('should handle ADD_ITEM action ', () => {
        expect( cartReducer(
            INITIAL_STATE_CART,
            {
                type: CartActionTypes.ADD_ITEM,
                payload: NEW_ITEM
            }
        ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 1}]         
        
        })
    });

    it('should increase quantity to an existing item in the cart ', () => {

        const mockItem = {...NEW_ITEM, quantity:4};

        expect( cartReducer(
            {...INITIAL_STATE_CART, cartItems: [mockItem]},
            {
                type: CartActionTypes.ADD_ITEM,
                payload: NEW_ITEM
            }
        ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 5}]         
        
        })
    });

    it('should decrease quantity to an existing item in the cart ', () => {

        const mockItem = {...NEW_ITEM, quantity:4};

        expect( cartReducer(
            {...INITIAL_STATE_CART, cartItems: [mockItem]},
            {
                type: CartActionTypes.REMOVE_ITEM,
                payload: NEW_ITEM
            }
        ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 3}]         
        
        })
    });

    it('should CLEAR ITEM FROM CART ', () => {

        const mockItem = {...NEW_ITEM, quantity:4};

        expect( cartReducer(
            {...INITIAL_STATE_CART, cartItems: [mockItem]},
            {
                type: CartActionTypes.CLEAR_ITEM_FROM_CART,
                payload: NEW_ITEM
            }
        ) ).toEqual({  hidden: true, cartItems: []         
        
        })
    });

    
    
});


describe('Shop Reducer', () => {
    
});

describe('Directory Reducer', () => {
    
});