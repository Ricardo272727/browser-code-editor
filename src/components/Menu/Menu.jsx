import React, { useRef } from 'react'; 
import "./Menu.scss"; 
import {
  AiFillFileAdd,
  AiFillFolderOpen,
  AiFillSetting,
  AiFillSave
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useFileManager } from '../../hooks/useFileManager.js';
import { useSelector } from 'react-redux';

const Menu = props => {

  const inputRef = useRef();
  const dispatch = useDispatch();
  const openFiles = useSelector(state => state.openFiles);
  const indexCurrentFile = useSelector(state => state.indexCurrentFile);
  const fileManager = useFileManager();

  const newFile = () => {
    fileManager.create('Untitle');
  };

  const openFile = () => {
    
  };

  const save = () => {
    fileManager.save(openFiles[indexCurrentFile]);
  };

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
      </button>
    </li>
    <li>
      <button onClick={save} className="save-file">
        <AiFillSave />
      </button>
    </li>
    <li>
      <button className="settings" onClick={settings}>
        <AiFillSetting/>
      </button>
    </li>
    <input type="file" className="d-none" ref={inputRef} />
  </ul>
 );
} 

export default Menu;
