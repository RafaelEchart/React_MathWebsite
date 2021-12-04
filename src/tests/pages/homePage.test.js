import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HomePage from '../../pages/HomePage/index.js';

describe('Pages snapshots', () => {
  it('Should render HomePage', async () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
