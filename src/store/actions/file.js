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


export const setFileSaving = (index, saving) => {
  return {
    type: ACTIONS.SET_FILE_SAVING,
    index,
    saving
  }
};

export const updateFileInServer = (file) => {
  return (dispatch) => {
    dispatch(setFileSaving(file.index, true));
    setTimeout(() => {
      console.log('updating file in server', file);
      dispatch(updateFile(file));
      dispatch(setFileSaving(file.index, false));
      dispatch(setFileModified(file.index, false));
    }, 1000);
  };
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



