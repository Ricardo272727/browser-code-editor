import { ACTIONS } from './index.js';

export const createFile = (name, content, size) => {
  return {
    type: ACTIONS.CREATE_FILE,
    name,
    content,
    size
  }
};

export const openFile = (index) => {
  return {
    type: ACTIONS.OPEN_FILE,
    index
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

export const setFiles = (files) => {
  console.log('seting files', files);
  return {
    type: ACTIONS.SET_FILES,
    files
  }
};

export const setFileSaving = (index, saving) => {
  return {
    type: ACTIONS.SET_FILE_SAVING,
    index,
    saving
  }
};


export const closeFile = (index) => {
  return {
    type: ACTIONS.CLOSE_FILE,
    index
  }
};

export const setFileSaved = (index, saved) => {
  return {
    type: ACTIONS.SET_FILE_SAVED,
    saved,
    index
  }
}



