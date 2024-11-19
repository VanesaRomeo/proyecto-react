import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import persistReducer from "redux-persist/es/persistReducer";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import categoryReducer from './features/categorySlice';
import productReducer from './features/ProductSlice';
import shoppingCartReducer from './features/Cart/cartSlice';
import menuReducer from './features/MenuSlice'
const rootReducer = combineReducers({
 
  categorias: categoryReducer,
  productos: productReducer,
  cart: shoppingCartReducer,
  menu: menuReducer,
});


const PersistConfig = {
  key: "root",
  storage,
  whitelist: [ 'categorias', 'productos', 'cart'],
}


const persistedReducer = persistReducer (PersistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore (store)
