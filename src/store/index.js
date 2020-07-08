import { createStore } from 'redux';
import { ACTIONS } from './actions';

const initialState = {
  
  files: [
    { index: 0, name: 'Menu.jsx', content: 'import React from \'react\'' } ,
    { index: 1, name: 'App.js', content: 'console.log(\'app.js\')' },
    { index: 2, name: 'App.css', content: '.app{ background: red; }' }
  ],
  indexCurrentFile: 2
};

const createFile = (index, name) => {
  return {
    index,
    name,
    content: ''
  }
};

const deleteFile = (index, files) => {
  let newFiles = files.slice();
  let i;
  for(i = 0; i < newFiles.length; i+=1){
    if(newFiles[i].index === index){
      break;
    }
  }
  if(i !== newFiles.length){
    newFiles.splice(i, 1);
  }
  return newFiles;
};


const reducer = (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.CREATE_FILE:
       return {
          ...state,
          files: [
            ...state.files,
            createFile(state.files.length, action.name)
          ],
          currentFile: createFile(state.files.length, action.name) 
        }
    case ACTIONS.RENAME_FILE:
       return {
          ...state,
          files: state.files.map(file => {
            if(file.index === action.index){
              return {...file, name: action.newName };
            }
            return {...file};
          })
       }
    case ACTIONS.SET_INDEX_CURRENT_FILE:
      return {
        ...state,
        indexCurrentFile: action.index
      }
    case ACTIONS.CLOSE_FILE:
      return {
        ...state,
        files: deleteFile(action.index, state.files)
      }
    case ACTIONS.UPDATE_FILE:
      return {
        ...state,
        files: state.files.map(file => {
          if(file.index === action.file.index){
            return { ...action.file };
          }
          return file;
        })
      }
       default: 
      return state;
  }
};


export default createStore(reducer);



