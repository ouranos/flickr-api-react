import React from 'react';
import { mount } from 'enzyme';
// Jest's fake timers won't work to test _.debounce.
// See: https://github.com/facebook/jest/issues/3465
import lolex from 'lolex';

import NavBar from './NavBar';
import { Typography, InputBase } from '@material-ui/core';

describe('<NavBar />', () => {
  it('renders the title', () => {
    const wrapper = mount(<NavBar />);
    const title = wrapper.find(Typography);
    expect(title.text()).toEqual('Flickr Feed');
  });

  it('renders a search field', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find(InputBase)).toHaveLength(1);
  });

  it('calls debounced onSearch on search text change', () => {
    let clock = lolex.install();
    const handleSearch = jest.fn();
    const event = {target: {value: 'cat'}};

    const wrapper = mount(
      <NavBar
        onSearch={handleSearch}
      />
    );
    const searchField = wrapper.find(InputBase).at(0);

    searchField.props().onChange(event);
    searchField.props().onChange(event);
    searchField.props().onChange(event);

    clock.tick(310); // 300ms debounce timer

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('cat');

    clock.uninstall();
  });
});
