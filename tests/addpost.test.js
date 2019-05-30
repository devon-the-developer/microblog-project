import React from 'react'
import { shallow } from 'enzyme'


import { AddPost } from '../client/components/AddPost'

describe('<AddPost />', () => {
    it('has 2 <input /> elements', () => {
        const expected = 2
        const wrapper = shallow(<AddPost />)

        const actual = wrapper.find('input')

        expect(actual.length).toBe(expected)
    })
})
