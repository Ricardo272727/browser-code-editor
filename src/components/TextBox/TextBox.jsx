import React, { useEffect, useState } from 'react';
import "./TextBox.scss"; 
import { useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useFileManager } from '../../hooks/useFileManager.js';
import { modes } from '../../lib/modes.js';

require("codemirror/lib/codemirror.css");
require('codemirror/mode/xml/xml.js');
require("codemirror/mode/javascript/javascript");
require('codemirror/mode/vbscript/vbscript.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require('codemirror/mode/jsx/jsx.js');
require('codemirror/mode/css/css.js');
require("codemirror/theme/monokai.css");


const TextBox = props => {
 
 const [mode, setMode] = useState(modes.js);
 const fileManager = useFileManager();
 const file = fileManager.getCurrentFile();

 useEffect(() => {
  selectMode(file ? file.name : '');
 }, [file]);

  const selectMode = (filename) => {
   for(let i = 0; i < modes.length; i+=1){
    if(modes[i].match(filename)){
      setMode(modes[i].mode);
      break;
    }
   }
  };

 return (
  <div className="text-box">
    <CodeMirror
      value={file.content}
      options={{
        mode: mode,
        lineNumbers: true,
        theme: 'monokai',
        gutter: true 
      }}
      onBeforeChange={(editor, data, value) => {
        fileManager.update({...file, content: value, saved: false});
      }}
      onChange={(editor, data, value) => {
      }}
      className="code"
    />
  </div>
 );
} 

export default TextBox;
