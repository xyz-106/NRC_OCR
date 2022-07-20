import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import mainReducer from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';

const persistConfigs = {
    key: 'OCR',
    storage: AsyncStorage,
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);
const persistedReducer = persistReducer(persistConfigs, mainReducer);
const store = createStore(persistedReducer, undefined, compose(applyMiddleware(...middlewares)));
const persistor = persistStore(store);
export {
    store,
    sagaMiddleware,
    persistor
}