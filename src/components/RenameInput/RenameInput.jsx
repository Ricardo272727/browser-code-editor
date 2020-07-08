import React, { useState, useEffect, useRef } from 'react';
import "./RenameInput.scss"; 
import PropTypes from 'prop-types';

const RenameInput = props => {
 
 const [name, setName] = useState('');
 const [show, setShow] = useState(false);
 const inputRef = useRef();


 useEffect(() => {
  setName(props.initialName);
 }, [props.initialName]);

 useEffect(() => {
   setShow(props.show);
 }, [props.show]);
 
 useEffect(() => {
  if(inputRef && inputRef.current && show){
    inputRef.current.focus();
  }
 }, [show]);
 
 const save = () => {
  props.saveFunc(name);
  setShow(false);
 };
 
 const onKeyDown = (event) => {
  console.log('key press', event.keyCode);
  if(event.keyCode === 13){
    save();
    return false;
  }
  return true;
 };

 
 if(!show) return null;
 return (
  <input
    className="rename-input"
    ref={inputRef}
    type="text"
    onBlur={save}
    value={name}
    onChange={({target}) => setName(target.value)}
    onKeyDown={onKeyDown}
   />
 );
};

RenameInput.propTypes = {
  saveFunc: PropTypes.func.isRequired,
  initialName: PropTypes.string.isRequired
};

export default RenameInput;
