import Moment from 'moment';

// pure functions to use in reducer

export const processFiles = (files) => {
  return files.map((file, i) =>  {
    return {...file, saved: true, saving: false, open: i%2 === 0 }
  })
};

export const createFile = (index, name, content, size) => {
  return {
    index,
    name,
    content,
    size,
    key: name,
    modified: +Moment() 
  }
};
