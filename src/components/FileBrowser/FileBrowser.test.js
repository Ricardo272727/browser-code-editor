import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mockOpenFiles } from '../../mocks/mockdata.js';
import reducer from '../../store/reducer.js';
import FileBrowser from './FileBrowser';
import { ContextMenuTrigger, MenuItem, ContextMenu } from 'react-contextmenu';
import RenameInput from '../RenameInput/RenameInput.jsx';

describe('src/components/FileBrowser', () => {
  const mockStore = createStore(reducer, {
    openFiles: mockOpenFiles
  }); 
  
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <FileBrowser/>
    </Provider>
  );
    

  it('should render n items in ul', () => {
      const wrapper = getWrapper();
      expect(wrapper.find('main').children().length).toEqual(mockOpenFiles.length);
  });

  it('should show context menu on right click', () => {
    const wrapper = getWrapper();
    const items = wrapper.find(ContextMenuTrigger);
    items.at(0).simulate('contextmenu');
    expect(items.at(0).find(ContextMenu)).toBeTruthy();
  });

  it('should has focus rename input on click "rename" button', () => {
    const wrapper = getWrapper();
    const items = wrapper.find('main').children();
    items.at(0).simulate('contextmenu');
    items.at(0).find(MenuItem).filterWhere(op => op.text() === 'Rename').simulate('click');
    expect(wrapper.find(RenameInput).filterWhere(input => input.prop('show')).length).toEqual(1);
  });
});

