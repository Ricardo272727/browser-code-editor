import { processFiles } from '../lib/file.js';
import Moment from 'moment';
const KB = 1024;
const MB = KB * KB;

const files = processFiles([
    {
      index: 0,
      name: 'Menu.jsx',
      key: 'src/Menu.jsx',
      size: 400 * KB,
      modified:  +Moment().subtract(15, 'days'),
      content: 'import React from \'react\''
    },
    {
      index: 1, 
      name: 'App.js',
      key: 'src/App.js',
      size: 1 * MB,
      modified:  +Moment().subtract(15, 'days'),
      content: 'console.log(\'app.js\')'
    },
    {
      index: 2, 
      name: 'App.css',
      key: 'src/App.css',
      size: 0.5 * MB,
      modified:  +Moment().subtract(15, 'days'),
      content: '.app{ background: red; }'
    },
    {
      index: 3,
      name: 'index.html',
      key: 'public/index.html',
      size: 10 * KB,
      modified: +Moment().subtract(3, 'minutes'),
      content: '<!DOCTYPE html>'
    },
]);

const indexCurrentFile = 1;

export { files, indexCurrentFile };

const mockdata = {  
  files,
  indexCurrentFile
};

export default mockdata;

