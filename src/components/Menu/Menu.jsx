import React, { useRef } from 'react'; 
import "./Menu.scss"; 
import {
  AiFillFileAdd,
  AiFillFolderOpen,
  AiFillSetting
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useFileManager } from '../../hooks/useFileManager.js';


const Menu = props => {

  const inputRef = useRef();
  const dispatch = useDispatch();
  const fileManager = useFileManager();

  const newFile = () => {
    console.log('New file');
    fileManager.create('Untitle');
    
  };



 return (
  <ul className="menu">
    <li>
      <button onClick={newFile}>
        <AiFillFileAdd/>
      </button>
    </li>
    <li>
      <button>
        <AiFillFolderOpen/>
      </button>
    </li>
    <li>
      <button>
        <AiFillSetting/>
      </button>
    </li>
    <input type="file" className="d-none" ref={inputRef} />
  </ul>
 );
} 

export default Menu;
