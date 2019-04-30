import React from 'react'
import {shallow} from 'enzyme'

import AddPost from '../client/components/AddPost'

test('Has 2 <input /> fields', () => {
    const expected = 2 
    const wrapper = shallow(<AddPost />)

    console.log(wrapper.debug())

    const actual = wrapper.find('input')
    console.log(actual.length)
    expected(actual.length).toBe(expected)
})

