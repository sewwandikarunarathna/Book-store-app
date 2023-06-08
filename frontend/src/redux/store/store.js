import {combineReducers, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; //this allows to use async await inside dispatch
import {composeWithDevTools} from 'redux-devtools-extension'; //allows to visualize the state inside browser
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';

//middleware passing to the store
const middlewares = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducer,
    bookList: bookListReducer
});

const store = configureStore(
    {reducer: reducer},
    composeWithDevTools(applyMiddleware(...middlewares)), //visualize the store with all middlewares
);

export {store}; 