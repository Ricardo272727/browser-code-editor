import { useDispatch } from 'react-redux';
import {
  createFile,
  renameFile
} from '../store/actions/file.js';

const useFiles = (files) => {

  const dispatch = useDispatch();
  
  const create = (name) => {
    dispatch(createFile(name));
  };

  const rename = (id, newName) => {
    dispatch(renameFile(id, newName));
  };

  const deleteItem = (id) => {
    
  };

  return {
    create,
    rename,
    deleteItem,
    
  }
};

export { useFiles };
