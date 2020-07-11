import React, { useEffect, useState } from 'react'; 
import "./FilesOpen.scss"; 
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { useFileManager } from '../../hooks/useFileManager.js';
import { FaCircle } from 'react-icons/fa';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent.js';
import { Spinner } from 'reactstrap';

const FilesOpen = props => {
  
  const openFiles = useSelector(state => state.openFiles);
  const indexCurrentFile = useSelector(state => state.indexCurrentFile);
  const currentFile = openFiles[indexCurrentFile] || {};
  const fileManager = useFileManager();
  const [onSave, setOnSave] = useState(
    () => () => {
      fileManager.save(openFiles[indexCurrentFile])
    });

  useKeyboardEvent({
    fn: onSave,
    ctrl: true,
    key: 's'
  });
 
  useEffect(() => {
    setOnSave(
      () => () => {
        fileManager.save(openFiles[indexCurrentFile]);
      }
    );
  }, [indexCurrentFile, openFiles]);
  
 return (
  <div className="files-open">
    {
      openFiles.map(file => (
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
            { !file.modified  ?
              <MdClose/> : (
                file.saving ?
                  <Spinner color="light" size="sm"/>
                :
                <FaCircle className="modified"/>) 
            }            
          </button>
        </div>
      ))
    }    
   </div>
 );
} 

export default FilesOpen;
