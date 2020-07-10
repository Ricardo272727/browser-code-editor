import React, { useEffect, useState } from 'react'; 
import "./FilesOpen.scss"; 
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { useFileManager } from '../../hooks/useFileManager.js';
import { FaCircle } from 'react-icons/fa';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent.js';

const FilesOpen = props => {
  
  const files = useSelector(state => state.files);
  const indexCurrentFile = useSelector(state => state.indexCurrentFile);
  const currentFile = files[indexCurrentFile] || {};
  const fileManager = useFileManager();
  const [onSave, setOnSave] = useState(
    () => () => {
      fileManager.setModified(indexCurrentFile, false)
    });

  useKeyboardEvent({
    fn: onSave,
    ctrl: true,
    key: 's'
  });
 
  useEffect(() => {
    setOnSave(
      () => () => {
        fileManager.setModified(indexCurrentFile, false);
      }
    );
  }, [indexCurrentFile]);
  
 return (
  <div className="files-open">
    {
      files.map(file => (
        <div
          className={"open-item" + (currentFile.index === file.index ? ' active' : '' )}
          key={file.index}>
          <button
            className="open-file"
            onClick={() => fileManager.open(file) }>
            <span>
              {file.name}
            </span>
          </button>
          <button
            className="close-file"
            onClick={() => fileManager.close(file.index)}>
            { !file.modified  ? <MdClose/> : <FaCircle className="modified"/> }
          </button>
        </div>
      ))
    }    
   </div>
 );
} 

export default FilesOpen;
