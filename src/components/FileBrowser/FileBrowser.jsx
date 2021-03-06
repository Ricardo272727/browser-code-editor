import React, { useState } from 'react';
import "./FileBrowser.scss"; 
import { useSelector } from 'react-redux';
import { useFileManager } from '../../hooks/useFileManager.js';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
import RenameInput from '../RenameInput/RenameInput';
import NestedFileBrowser from '../NestedFileBrowser/NestedFileBrowser';

const FileBrowser = props => {
  const fileManager = useFileManager();
  const [renameInput, setRenameInput] = useState({ show: false, index: null });
  const closeRenameInput = () => setRenameInput({ show: false, index: null });

  const optionsFactory = (file) => {
    return [
      {
        label: 'Rename',
        action: () => setRenameInput({ show: true, index: file.index })
      },
      {
        label: 'Copy',
        action: () => console.log("Copying and file")
      }
    ]
  };

  const getContextId = (file) => file.name + '-' + file.index;

 return (
  <div className="file-browser">
    <header>
      <span>Upload files</span>
    </header>
    <section className="server-files">
      <NestedFileBrowser/>
    </section>
   </div>
 );
} 
   { /*
    <main className="open-files">
      {
        openFiles.map(file => (
          <div key={file.index}>
          <ContextMenuTrigger id={getContextId(file)}>
            {
              renameInput.index !== file.index &&
              <button
                className="file"
                onClick={() => fileManager.open(file)}>
                 <span>{file.name}</span>
              </button>
            }
            {
            <RenameInput
              show={renameInput.show && renameInput.index === file.index}
              initialName={file.name}
              saveFunc={(newName) => {
                fileManager.rename(file.index, newName);
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
      */}

export default FileBrowser;
