import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import Reactotron from '../debug/reactotron';
import userReducer from './user/reducers';

export const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  timeout: 0, // Fix error redux persyst: rehydrate for "root" called after timeout
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, Reactotron.createEnhancer!());
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
