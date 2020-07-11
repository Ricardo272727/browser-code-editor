import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import reducer from '../../store/reducer.js';
import { createStore } from 'redux';
import mockdata from '../../mocks/mockdata.js';
import Menu from './Menu.jsx';

describe('src/components/Menu', () => {
  const newFile = jest.fn();
  const store = createStore(reducer, mockdata);
  const getWrapper = () => mount(
    <Provider store={store}>
      <Menu/>
    </Provider>
  );

  it('should add a new file to openFiles, on click button new-file', () => {
      const wrapper = getWrapper();
      wrapper.find('.new-file').simulate('click');
      expect(store.getState().openFiles.length).toBe(mockdata.openFiles.length+1);
  })
  
})
