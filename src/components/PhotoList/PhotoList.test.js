import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PhotoList from './PhotoList';
import PhotoTile from '../PhotoTile';


describe('<PhotoList />', () => {
  test('render one <PhotoTile /> per photo', () => {
    const photos = [
      { title: 'Photo 1', link: 'http://example.com/photo1' },
      { title: 'Photo 2', link: 'http://example.com/photo1' }
    ];

    const wrapper = shallow(<PhotoList photos={photos} />);

    expect(wrapper.find(PhotoTile)).toHaveLength(2);
  });

  test('display a message when no photos', () => {
    const photos = [];
    const wrapper = shallow(<PhotoList photos={photos} />)

    expect(wrapper.contains('No photos found'));
  });
});
