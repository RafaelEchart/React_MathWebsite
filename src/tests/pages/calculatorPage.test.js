import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../../pages/CalculatorPage/index.js';

describe('Snapshot test for Calculator Page', () => {
  it('Should render CalculatorPage', async () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
