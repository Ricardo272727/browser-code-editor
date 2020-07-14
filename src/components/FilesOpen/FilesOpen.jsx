import React, { useEffect, useCallback } from 'react'; 
import "./FilesOpen.scss"; 
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { useFileManager } from '../../hooks/useFileManager.js';
import { FaCircle } from 'react-icons/fa';
import { useKeyboardEvent } from '../../hooks/useKeyboardEvent.js';
import { Spinner } from 'reactstrap';

const FilesOpen = props => {
  
  const fileManager = useFileManager();
  const openFiles = fileManager.getOpenFiles();
  const currentFile = fileManager.getCurrentFile();

  const onSave = useCallback(() => {
      fileManager.save(currentFile);
    }, [currentFile]);

  useKeyboardEvent({
    fn: onSave,
    ctrl: true,
    key: 's'
  });
 
 return (
  <div className="files-open">
    {
      openFiles.map(file => (
        <div
          className={"open-item" + (currentFile.index === file.index ? ' active' : '' )}
          key={file.index}>
          <button
            className="open-file"
            onClick={() => fileManager.open(file.index) }>
            <span>
              {file.name}
            </span>
          </button>
          <button
            className="close-file"
            onClick={() => fileManager.close(file.index)}>
            { file.saved  ?
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
