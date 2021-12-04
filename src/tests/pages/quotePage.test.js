import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import QuotePage from '../../pages/QuotePage/index.js';

describe('Pages snapshots', () => {
  it('Should render QuotePage', async () => {
    const tree = renderer.create(<QuotePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
