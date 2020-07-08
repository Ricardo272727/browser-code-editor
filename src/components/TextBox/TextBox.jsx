import React, { useEffect, useState } from 'react';
import "./TextBox.scss"; 
import { useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useFileManager } from '../../hooks/useFileManager.js';


require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/blackboard.css");
require("codemirror/theme/monokai.css");


const TextBox = props => {
 
 const indexCurrentFile = useSelector(state => state.indexCurrentFile);
 const files = useSelector(state => state.files);
 const [file, setFile] = useState({});
 const fileManager = useFileManager(); 

 useEffect(() => {
  setFile(files[indexCurrentFile] || {});
   console.log( files, indexCurrentFile);
 }, [indexCurrentFile, files]);

 return (
  <div className="text-box">
    <CodeMirror
      value={file.content}
      options={{
        mode: 'javascript',
        lineNumbers: true,
        theme: 'monokai',
        gutter: true 
      }}
      onBeforeChange={(editor, data, value) => {
        fileManager.update({...file, content: value});
      }}
      onChange={(editor, data, value) => {
      }}
      className="code"
    />
  </div>
 );
} 

export default TextBox;
