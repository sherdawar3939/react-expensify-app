import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/HeaderPage';

test('should render header component correctly', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})