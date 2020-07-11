import { ACTIONS } from './actions';
import { createFile, deleteFile } from '../lib/file.js';


const initialState = {
  
  openFiles: [],
  indexCurrentFile: null,
  uploadFiles: []
  
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.CREATE_FILE:
       return {
          ...state,
          openFiles: [
            ...state.openFiles,
            createFile(state.openFiles.length, action.name)
          ],
          indexCurrentFile: state.openFiles.length
        }
    case ACTIONS.RENAME_FILE:
       return {
          ...state,
          openFiles: state.openFiles.map(file => {
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
        openFiles: deleteFile(action.index, state.openFiles)
      }
    case ACTIONS.UPDATE_FILE:
      return {
        ...state,
        openFiles: state.openFiles.map(file => {
          if(file.index === action.file.index){
            return { ...action.file };
          }
          return { ...file };
        })
      }
    case ACTIONS.SET_FILE_MODIFIED:
      return {
        ...state,
        openFiles: state.openFiles.map(file => {
          if(file.index === action.index) {
            return { ...file, modified: action.modified }
          }
          return {...file};
        })
      }
    case ACTIONS.SET_FILE_SAVING:
      return {
        ...state,
        openFiles: state.openFiles.map(file => {
          if(file.index === action.index){
            return { ...file, saving: action.saving }
          }
          return { ...file };
        })
      }
       default:
      return state;
  }
};

export default reducer;

