import React, { useState, useEffect } from 'react';
import "./TextBox.scss"; 
import { useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useDispatch } from 'react-redux';

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/blackboard.css");
require("codemirror/theme/monokai.css");
const TextBox = props => {
 
 const file = useSelector(state => state.currentFile);
 const dispatch = useDispatch();
 const [content, setContent] = useState('');

 useEffect(() => {
   setContent(file.content);
 }, [file]);

 return (
  <div className="text-box">
    <CodeMirror
      value={content}
      options={{
        mode: 'javascript',
        lineNumbers: true,
        theme: 'monokai',
        gutter: true 
      }}
      onBeforeChange={(editor, data, value) => {
        setContent(value);
      }}
      onChange={(editor, data, value) => {
        console.log(editor, data, value);
      }}
      className="code"
    />
  </div>
 );
} 

export default TextBox;
