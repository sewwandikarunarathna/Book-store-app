import {combineReducers, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; //this allows to use async await inside dispatch
import {composeWithDevTools} from 'redux-devtools-extension'; //allows to visualize the state inside browser
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import userReducer from '../reducers/userAuthReducer';

//middleware passing to the store
const middlewares = [thunk];

const reducer = combineReducers({
    userLogin: userReducer, //for both login and register
    bookCreated: createBookReducer,
    bookList: bookListReducer
});

//get user from localstorage and save it into store
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;

const initialState = {
    userLogin: {userInfo: userAuthFromStorage }
}

// const store = configureStore({
//     reducer: reducer,
//     initialState,
//     devTools: composeWithDevTools(applyMiddleware(...middlewares)), //visualize the store with all middlewares
// });

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: middlewares,
    devTools: composeWithDevTools(applyMiddleware(...middlewares)),
  });
  
//  const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middlewares)),
//  );
export {store}; 