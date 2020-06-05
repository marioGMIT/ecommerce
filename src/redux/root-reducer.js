import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';



const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart', 'user']
}

const authPersistConfig = {
  key: 'root',
  storage:storageSession
}

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig,userReducer),
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(cartPersistConfig, rootReducer);



