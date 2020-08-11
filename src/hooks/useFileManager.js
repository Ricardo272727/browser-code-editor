import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import {
  createFile,
  renameFile,
  setIndexCurrentFile,
  closeFile,
  updateFile,
  setFileSaved,
  setFiles,
  openFile
} from '../store/actions/file.js';
import { saveAs } from 'file-saver';

const useFileManager = () => {

  const dispatch = useDispatch();
  const _files_ = useSelector(state => state.files);
  const indexCurrentFile = useSelector(state => state.indexCurrentFile);
  const [currentFile, setCurrentFile] = useState({});

  useEffect(() => {
    setCurrentFile(
      _files_.filter(f => f.index === indexCurrentFile)[0] || {}
    );
  }, [indexCurrentFile, _files_]);

  const getCurrentFile = () => currentFile;


  const getOpenFiles = () => {
    var op = _files_.filter(f => f.open);
    return op;
  };

  const create = (name, content = '', size = 0) => {
    if(name){
      dispatch(createFile(name, content, size));
    }
  };

  const rename = (index, newName) => {
    if(index && newName){
      dispatch(renameFile(index, newName));
    }
  };

  const deleteItem = (index) => {
    if(index){
      console.log('implementme!');
    }
  };

  const download = (file) => {
    console.log('saving file', file);
    if(file){
      let blob = new Blob([file.content], {
        type: 'text/plain;charset=utf-8'
      });
      saveAs(blob, file.name);
    }
  }

  const update = (file) => {
    if(file){
      dispatch(updateFile(file));
    }
  };

  const open = (index) => {
     dispatch(openFile(index));
  };

  const close = (index) => {
    dispatch(closeFile(index));
  };

  const setModified = (index, modified) => {
    dispatch(setFileSaved(index, modified));
  };
  

  return {
    create,
    rename,
    deleteItem,
    open,
    close,
    update,
    download,
    setModified,
    setFiles,
    getCurrentFile,
    getOpenFiles
  }
};

export { useFileManager };
