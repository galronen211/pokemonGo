import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import bagSlice from './slices/bagSlice';
import pokemonSlice from './slices/pokemonSlice';

const persistConfig = {
  key: 'bag',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, bagSlice);

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    bag: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
