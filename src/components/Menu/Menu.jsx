import React, { useRef } from 'react'; 
import "./Menu.scss"; 
import {
  AiFillFileAdd,
  AiFillFolderOpen,
  AiFillSetting,
  AiFillSave,
  AiOutlineDownload
} from 'react-icons/ai';
import { useFileManager } from '../../hooks/useFileManager.js';

const Menu = props => {

  const fileInputRef = useRef();
  const fileManager = useFileManager();
  const currentFile = fileManager.getCurrentFile();

  const newFile = () => {
    fileManager.create('Untitle');
  };

  const openFile = () => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const readFiles = () => {
    const fileList = fileInputRef.current.files;
    const readers = [];
    
    if(fileList){
      for(let i = 0; i < fileList.length; i++){
        readers[i] = new FileReader();
        readers[i].onload = ({ target: { result }}) => {
          fileManager.create(fileList[i].name, result, fileList[i].size);
        }
        console.log(fileList[i]);
        readers[i].readAsText(fileList[i]);
      }
    }
  };

  const save = () => {
    fileManager.update(currentFile);
  };
  
  const download = () => {
    fileManager.download(currentFile);
  }

  const settings = () => {

  };

 return (
  <ul className="menu">
    <li>
      <button onClick={newFile} className="new-file">
        <AiFillFileAdd/>
      </button>
    </li>
    <li>
      <button className="open-file" onClick={openFile}>
        <AiFillFolderOpen/>
        <input 
          type="file" 
          multiple={true}
          className="d-none"
          ref={fileInputRef}
          onChange={readFiles}
        />
      </button>
    </li>
    <li>
      <button onClick={save} className="save-file">
        <AiFillSave />
      </button>
    </li>
    <li>
      <button onClick={download} className="download-file">
        <AiOutlineDownload />
      </button>
    </li>
    <li>
      <button className="settings" onClick={settings}>
        <AiFillSetting/>
      </button>
    </li>
  </ul>
 );
} 

export default Menu;
