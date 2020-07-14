import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import {
  createFile,
  renameFile,
  setIndexCurrentFile,
  closeFile,
  updateFile,
  updateFileInServer,
  setFileSaved,
  setFiles,
  openFile
} from '../store/actions/file.js';

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

  useEffect(() => {
    console.log(_files_);
  }, [_files_])

  const getOpenFiles = () => {
    var op = _files_.filter(f => f.open);
    return op;
  };

  const create = (name) => {
    if(name){
      console.log('creating file', name);
      dispatch(createFile(name));
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

  const save  = (file) => {
    if(file){
      dispatch(updateFileInServer(file));
    }
  };

  const update = (file) => {
    if(file){
      dispatch(updateFile(file));
    }
  };

  const open = (index) => {
     dispatch(openFile(index));
  }

  const close = (index) => {
    dispatch(closeFile(index));
  };

  const setModified = (index, modified) => {
    dispatch(setFileSaved(index, modified));
  };

  const handleCreateFolder = (folderName) => { 
    if(folderName){
      console.log('creating a new folder', folderName);
      dispatch(setFiles(_files_.concat([
        {
          key: folderName
        }
      ])));
    }
  };

  const handleCreateFiles = (files, prefix) => {
    if(!files) return;
    const newFiles = _files_.map((file) => {
      let newKey = prefix;
      if (
        prefix !== "" &&
        prefix.substring(prefix.length - 1, prefix.length) !== "/"
      ) {
        newKey += "/";
      }
      newKey += file.name;
      return {
        key: newKey,
        size: file.size,
        modified: +Moment(),
      };
    });
    const uniqueNewFiles = [];
    newFiles.map((newFile) => {
      let exists = false;
      _files_.map((existingFile) => {
        if (existingFile.key === newFile.key) {
          exists = true;
        }
        return null;
      });
      if (!exists) {
        uniqueNewFiles.push(newFile);
      }
      return null;
    });
    dispatch(setFiles(uniqueNewFiles));
  };

  const handleRenameFolder = (oldKey, newKey) => {
      if(!oldKey || !newKey) return;
      const newFiles = [];
      _files_.map((file) => {
        if (file.key.substr(0, oldKey.length) === oldKey) {
          newFiles.push({
            ...file,
            key: file.key.replace(oldKey, newKey),
            modified: +Moment(),
          });
        } else {
          newFiles.push(file);
        }
        return null;
      });
      dispatch(setFiles(newFiles));
  };

  const handleRenameFile = (oldKey, newKey) => {
      if(!oldKey || !newKey) return;
      const newFiles = [];
      _files_.map((file) => {
        if (file.key === oldKey) {
          newFiles.push({
            ...file,
            key: newKey,
            modified: +Moment(),
          });
        } else {
          newFiles.push(file);
        }
        return null;
      });
      dispatch(setFiles(newFiles));
  };

  const handleDeleteFolder = (folderKey) => {
    if(!folderKey) return;
    const newFiles = [];
    _files_.map((file) => {
      if (file.key.substr(0, folderKey.length) !== folderKey) {
        newFiles.push(file);
      }
      return null;
    });
    dispatch(setFiles(newFiles));
  };

  const handleDeleteFile = (fileKey) => {
    if(!fileKey) return;
    const newFiles = [];
    _files_.map((file) => {
      if (file.key !== fileKey) {
        newFiles.push(file);
      }
      return null;
    });
    dispatch(setFiles(newFiles));
  };


  return {
    create,
    rename,
    deleteItem,
    open,
    close,
    update,
    save,
    setModified,
    setFiles,
    handleCreateFiles,
    handleCreateFolder,
    handleRenameFile,
    handleRenameFolder,
    handleDeleteFile,
    handleDeleteFolder,
    getCurrentFile,
    getOpenFiles
  }
};

export { useFileManager };
