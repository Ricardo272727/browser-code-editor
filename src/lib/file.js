
// pure functions to use in reducer

export const processFiles = (files) => {
  return files.map(file =>  {
    return {...file, modified: false, saving: false }
  })
};

export const createFile = (index, name) => {
  return {
    index,
    name,
    content: ''
  }
};

export const deleteFile = (index, files) => {
  let newFiles = files.slice();
  let i;
  for(i = 0; i < newFiles.length; i+=1){
    if(newFiles[i].index === index){
      break;
    }
  }
  if(i !== newFiles.length){
    newFiles.splice(i, 1);
  }
  return newFiles;
};

