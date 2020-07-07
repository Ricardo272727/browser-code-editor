import React from 'react'; 
import "./Menu.scss"; 
import {
  AiFillFileAdd,
  AiFillFolderOpen,
  AiFillSetting
} from 'react-icons/ai';

const Menu = props => {
 return (
  <ul className="menu">
    <li>
      <button>
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
  </ul>
 );
} 

export default Menu;
