import { useDispatch } from 'react-redux';
import {
  createFile,
  renameFile,
  setIndexCurrentFile,
  closeFile,
  updateFile
} from '../store/actions/file.js';

const useFileManager = () => {

  const dispatch = useDispatch();
  
  const create = (name) => {
    dispatch(createFile(name));
  };

  const rename = (index, newName) => {
    dispatch(renameFile(index, newName));
  };

  const deleteItem = (index) => {
    console.log('implementme!');
  };

  const save  = (file) => {
    console.log('implementme!');
  }

  const update = (file) => {
    dispatch(updateFile(file));
  };

  const open = (file) => {
    dispatch(setIndexCurrentFile(file.index));
  }

  const close = (index) => {
    dispatch(closeFile(index));
  };

  return {
    create,
    rename,
    deleteItem,
    open,
    close,
    update,
    save
  }
};

export { useFileManager };
