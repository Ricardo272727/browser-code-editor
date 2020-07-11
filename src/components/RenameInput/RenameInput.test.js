import React from 'react';
import RenameInput from './RenameInput.jsx';
import { mount } from 'enzyme';

let component;
describe('src/components/RenameInput', () => {
  const saveFunc = jest.fn();
  const initialName = 'Untitle';
  const getComponent = (show) => mount(
    <div>
    <RenameInput
      saveFunc={saveFunc}
      initialName={initialName}
      show={show}
    />
    </div>
  );

  it('when prop show is true component render an input and input has focus', () => {
     component = getComponent(true);
     expect(document.activeElement === component.find('input').getDOMNode()).toBeTruthy();
  });

  it('should exec saveFunc when loss focus', () => {
    component = getComponent(true);
    component.find('input').simulate('change', {target: { value: 'App.cpp'}});
    expect(component.find('input').prop('value')).toEqual('App.cpp');
    component.find('input').simulate('blur');
    expect(saveFunc.mock.calls.length).toEqual(1);
  });

})
