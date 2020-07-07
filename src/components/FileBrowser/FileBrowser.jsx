import React, { useState } from 'react';
import "./FileBrowser.scss"; 
import { useSelector } from 'react-redux';
import { useFileManager } from '../../hooks/useFileManager.js';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
import RenameInput from '../RenameInput/RenameInput';

const FileBrowser = props => {
  const files = useSelector(state => state.files);
  const fileManager = useFileManager();
  const [renameInput, setRenameInput] = useState({ show: false, id: null });
  const closeRenameInput = () => setRenameInput({ show: false, id: null });

  const optionsFactory = (file) => {
    return [
      {
        label: 'Rename',
        action: () => setRenameInput({ show: true, id: file.id })
      },
      {
        label: 'Copy',
        action: () => console.log("Copying and file")
      }
    ]
  };

  const getContextId = (file) => file.name + '-' + file.id;

 return (
  <div className="file-browser">
    <header>
      <span>Open files</span>
    </header>
    <main>
      {
        files.map(file => (
          <div key={file.id}>
          <ContextMenuTrigger id={getContextId(file)}>
            {
              renameInput.id !== file.id &&
              <button className="file">
               <span>{file.name}</span>
              </button>
            }
            {
            <RenameInput
              show={renameInput.show && renameInput.id === file.id}
              initialName={file.name}
              saveFunc={(newName) => {
                fileManager.rename(file.id, newName);
                closeRenameInput();
              }}
            />
            }
          </ContextMenuTrigger>
          <ContextMenu id={getContextId(file)}>
            {
              optionsFactory(file).map(op => (
                <MenuItem onClick={op.action} key={op.label}>
                  {op.label}
                </MenuItem>
              ))
            }
          </ContextMenu>
          </div>
        ))
      }
    </main>
   </div>
 );
} 

export default FileBrowser;
