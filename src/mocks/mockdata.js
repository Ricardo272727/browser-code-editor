import { processFiles } from '../lib/file.js';

const mockOpenFiles = processFiles([
  { index: 0, name: 'Menu.jsx', content: 'import React from \'react\'' },
  { index: 1, name: 'App.js', content: 'console.log(\'app.js\')' },
  { index: 2, name: 'App.css', content: '.app{ background: red; }' } 
]);

const mockUploadFiles = processFiles([
    { index: 0, name: 'Menu.jsx', content: 'import React from \'react\'' },
    { index: 1, name: 'App.js', content: 'console.log(\'app.js\')' },
    { index: 2, name: 'App.css', content: '.app{ background: red; }' },
    { index: 3, name: 'index.html', content: '<!DOCTYPE html>'},
    { index: 4, name: '' }
]);

const indexCurrentFile = 1;

export { mockOpenFiles, mockUploadFiles, indexCurrentFile };

const mockdata = {
  uploadFiles: mockUploadFiles,
  openFiles: mockOpenFiles,
  indexCurrentFile
};

export default mockdata;

