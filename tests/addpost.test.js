import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { AddPost } from '../client/components/AddPost'

describe('<AddPost />', () => {
    it('has 2 <input /> elements', () => {
        const expected = 2
        const wrapper = shallow(<AddPost />)

        const actual = wrapper.find('input')

        expect(actual.length).toBe(expected)
    })
    it('has 1 <textarea /> element', () => {
        const expected = 1 
        const wrapper = shallow(<AddPost />)

        const actual = wrapper.find('textarea')

        expect(actual.length).toBe(expected)
    })
    it('should match snapshot', () => {
        const tree = shallow(<AddPost />)

        expect(toJson(tree)).toMatchSnapshot()
    })
})
