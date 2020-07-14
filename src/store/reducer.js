import { ACTIONS } from './actions';
import { createFile, processFiles } from '../lib/file.js';


const initialState = {
  
  files: [],
  indexCurrentFile: null,
  
};


const reducer = (state = initialState, action) => {
  switch(action.type){
      
    case ACTIONS.SET_FILES:
      console.log(action.files);
      return {
        ...state,
        files: action.files
      }
      
    case ACTIONS.SET_INDEX_CURRENT_FILE:
      return {
        ...state,
        indexCurrentFile: action.index
      }

    case ACTIONS.CREATE_FILE:
       return {
          ...state,
          files: [
            ...state.files,
            processFiles([
              createFile(state.files.length, action.name)
            ])[0]
          ],
          indexCurrentFile: state.files.length
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

    case ACTIONS.OPEN_FILE:
      let newState = { ...state };
      let openFiles = state.files.filter(file => file.open);
      let isOpen = openFiles.filter(file => file.index === action.index).length !== 0;
      if(!isOpen){
        newState.files = newState.files.map(file => {
          if(file.index === action.index){
             return {...file, open: true };
          }
          return file;
        })
      } 
      
      newState.indexCurrentFile = action.index;
      return newState;

    case ACTIONS.CLOSE_FILE:
      return {
        ...state,
        files: state.files.map(file => {
          if(file.index === action.index){
            return {...file, open: false };    
          }
          return file;
        })
      }

    case ACTIONS.UPDATE_FILE:
      return {
        ...state,
        files: state.files.map(file => {
          if(file.index === action.file.index){
            return { ...action.file };
          }
          return { ...file };
        })
      }
      
    case ACTIONS.SET_FILE_SAVED:
      return {
        ...state,
        files: state.files.map(file => {
          if(file.index === action.index) {
            return { ...file, saved: action.saved }
          }
          return file;
        })
      }
      
    case ACTIONS.SET_FILE_SAVING:
      return {
        ...state,
        files: state.files.map(file => {
          if(file.index === action.index){
            return { ...file, saving: action.saving }
          }
          return file;
        })
      }
    default:
      return state;
  }
};

export default reducer;

