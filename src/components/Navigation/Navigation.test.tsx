import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

it('renders correctly Navigation', () => {
  const wrapper = shallow(<Navigation />);

  expect(wrapper).toMatchSnapshot();
});
