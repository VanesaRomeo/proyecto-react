import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

import categoryReducer from './features/CategorySlice';
import productReducer from './features/ProductSlice';
import shoppingCartReducer from './features/Cart/CartSlice';
import menuReducer from './features/MenuSlice';

const rootReducer = combineReducers({
  categorias: categoryReducer,
  productos: productReducer,
  cart: shoppingCartReducer,
  menu: menuReducer,
});

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['categorias', 'productos', 'cart'], // Estados que serán persistidos
};

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignorar estas acciones
      },
    }),
});

export const persistor = persistStore(store);
