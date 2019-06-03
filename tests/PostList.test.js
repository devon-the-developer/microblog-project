import React from 'react'
import { shallow } from 'enzyme'

import { PostList }  from '../client/components/PostList'

describe('<PostList />', () => {
    it('exists', () => {
        const props = {
            data: {
                posts: [
                    {
                        name: 'post1',
                        tags: 'tech' ,
                        content: 'fake content'
                    },
                    {
                        name: 'post2',
                        tags: 'java' ,
                        content: ' more fake content'
                    }
                ]
            }
        }
        const wrapper = shallow(<PostList {...props} />)

        const actual = wrapper.find('div')

        expect(actual.length).toBe(1)
    })
})