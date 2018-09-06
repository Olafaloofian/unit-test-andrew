import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('<App /> events', () => {
  it('inc and dec buttons', () => {
    const wrapper = shallow(<App />);
      expect(wrapper.state().count).toBe(0);

      wrapper.find('.inc').simulate('click');
      expect(wrapper.state().count).toBe(1);

      wrapper.find('.dec').simulate('click');
      expect(wrapper.state().count).toBe(0);

      wrapper.find('.dec').simulate('click');
      expect(wrapper.state().count).toBe(-1);
  });
})