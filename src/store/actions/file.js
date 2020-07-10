import { ACTIONS } from './index.js';

export const createFile = (name) => {
  return {
    type: ACTIONS.CREATE_FILE,
    name
  }
};

export const renameFile = (index, newName) => {
  return {
    type: ACTIONS.RENAME_FILE,
    index,
    newName
  } 
};

export const setIndexCurrentFile = (index) => {
  return {
    type: ACTIONS.SET_INDEX_CURRENT_FILE,
    index
  }
};

export const updateFile = (file) => {
  return {
    type: ACTIONS.UPDATE_FILE,
    file
  }
};  

export const closeFile = (index) => {
  return {
    type: ACTIONS.CLOSE_FILE,
    index
  }
};

export const setFileModified = (index, modified) => {
  return {
    type: ACTIONS.SET_FILE_MODIFIED,
    modified,
    index
  }
}



