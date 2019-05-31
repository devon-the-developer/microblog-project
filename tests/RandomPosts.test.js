import React from 'react'
import { shallow } from 'enzyme'

import { RandomPosts } from '../client/components/RandomPosts'

describe('<RandomPosts />', () => {
    it('has an h4 element that displays: Random Posts', () => {
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
        const expected = 'Random Posts'
        const wrapper = shallow(<RandomPosts {...props} />)

        const actual = wrapper.find('h4').text()

        expect(actual).toBe(expected)
    })
})