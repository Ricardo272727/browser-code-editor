import React from 'react'; 
import "./FilesOpen.scss"; 
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';

const FilesOpen = props => {
  const files = useSelector(state => state.files);
  const currentFile = useSelector(state => state.currentFile);

 return (
  <div className="files-open">
    {
      files.map(file => (
        <div
          className={"open-item" + (currentFile.id === file.id ? ' active' : '' )}
          key={file.id}>
          <button className="open-file">
            <span>
              {file.name}
            </span>
          </button>
          <button className="close-file">
            <MdClose/>
          </button>
        </div>
      ))
    }    
   </div>
 );
} 

export default FilesOpen;
