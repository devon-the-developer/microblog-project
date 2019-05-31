import React from 'react'
import { shallow } from 'enzyme'

import  PostList  from '../client/components/PostList'

describe('<PostList />', () => {
    it('exists', () => {
        const wrapper = shallow(<PostList />)

        const actual = wrapper.find('div')

        expect(actual.length).toBe(1)
    })
})