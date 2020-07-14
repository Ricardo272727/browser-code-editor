import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';
import mockdata from '../mocks/mockdata.js';

export default createStore(reducer, mockdata, applyMiddleware(thunk));



