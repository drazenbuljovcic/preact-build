import React from 'react';
import { Main } from './Main';

import { shallow } from 'enzyme';

describe('Main app component', () => {
 
  it('renders without crashing', () => {
    
    const wrapper = shallow(<Main config={{ 'env': 'test' }} />)
    
    expect(wrapper.contains(
      <div>
        <h1>Preact Test - test</h1>
      </div>)).toBe(true);

  });
});