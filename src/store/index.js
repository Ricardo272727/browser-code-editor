import { createStore } from 'redux';


const initialState = {
  
  files: [
    { id: 1, name: 'Menu.jsx' } ,
    { id: 2, name: 'App.js' },
    { id: 3, name: 'App.css' }
  ],
  currentFile: {
    id: 2,
    name: 'App.js',
    content: `
      const express = require('express');
      const app = express();

      const init = () => {
        console.log('Initializing app');
      }
    `
  }
};


const reducer = (state = initialState, action) => {
  switch(action.type){
    
    default: 
      return state;
  }
};


export default createStore(reducer);



