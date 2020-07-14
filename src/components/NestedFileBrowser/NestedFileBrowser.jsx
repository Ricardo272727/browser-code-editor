import React from "react";
import FileBrowser from "react-keyed-file-browser";
import "./NestedFileBrowser.scss";
import { 
  AiFillFile,
  AiOutlineFileImage,
  AiFillFilePdf,
  AiFillEdit,
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineDelete
} from 'react-icons/ai';
import { Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useFileManager } from '../../hooks/useFileManager.js';
import Moment from 'moment';

const NestedFileBrowser = props => {

  const files =  useSelector(state => state.files);
  const fileManager = useFileManager();

  return (
    <FileBrowser
      files={files}
      icons={{
        File: <AiFillFile/>,
        Image: <AiOutlineFileImage/>,
        PDF: <AiFillFilePdf/>,
        Rename: <AiFillEdit/>,
        Folder: <AiFillFolder/>,
        FolderOpen: <AiFillFolderOpen/>,
        Delete: <AiOutlineDelete/>,
        Loading: <Spinner size="sm" color="light"/>
      }}
      onSelectFile={(file) => fileManager.open(file.index)}
      onCreateFolder={fileManager.handleCreateFolder}
      onCreateFiles={fileManager.handleCreateFiles}
      onMoveFolder={fileManager.handleRenameFolder}
      onMoveFile={fileManager.handleRenameFile}
      onRenameFolder={fileManager.handleRenameFolder}
      onRenameFile={fileManager.handleRenameFile}
      onDeleteFolder={fileManager.handleDeleteFolder}
      onDeleteFile={fileManager.handleDeleteFile}
    />
  );
  
}

export default NestedFileBrowser;
