import React from 'react'; 
import "./FileBrowser.scss"; 
import { useSelector } from 'react-redux';

const FileBrowser = props => {
  const files = useSelector(state => state.files);


 return (
  <div className="file-browser">
    <header>
      <span>Open files</span>
    </header>
    <main>
      {
        files.map(file => (
         <button className="file" key={file.id}>
           <span>{file.name}</span>
         </button>
        ))
      }
    </main>
   </div>
 );
} 

export default FileBrowser;
