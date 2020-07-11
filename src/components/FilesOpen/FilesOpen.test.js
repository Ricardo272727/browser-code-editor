import React from 'react';
import { mount } from 'enzyme';
import FilesOpen from './FilesOpen.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mockdata from '../../mocks/mockdata.js';
import reducer from '../../store/reducer.js';

describe('src/components/FilesOpen', () => {
  const store = createStore(reducer, mockdata);
  const getWrapper = () => mount(
    <Provider store={store}>
      <FilesOpen/>
    </Provider>
  );
    
  it('should show n files open', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.files-open').children().length).toEqual(mockdata.openFiles.length);
  });

  it('children active should has className "active"', () => {
    const wrapper = getWrapper();
    expect(wrapper.exists('.open-item.active')).toEqual(true);
    expect(wrapper.find('.open-item.active').key())
      .toEqual(mockdata.indexCurrentFile.toString());
  })

  it('press close button should delete a file from openFiles', () => {
    const wrapper = getWrapper();
    wrapper.find('.close-file').at(0).simulate('click');
    expect(wrapper.find('.open-file').length).toEqual(mockdata.openFiles.length - 1);
  })

});
