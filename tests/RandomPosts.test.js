import React from 'react'
import { shallow } from 'enzyme'

import { RandomPosts } from '../client/components/RandomPosts'

describe('<RandomPosts />', () => {
    it('has an h4 element that displays: Random Posts', () => {
        const props = {
            data: {
                posts: [
                    {   
                        id: 1,
                        name: 'post1',
                        tags: 'tech' ,
                        content: 'fake content'
                    },
                    {
                        id: 2,
                        name: 'post2',
                        tags: 'java' ,
                        content: ' more fake content'
                    },
                    {   
                        id: 3,
                        name: 'post3',
                        tags: 'tech' ,
                        content: 'fake content'
                    },
                    {
                        id: 4,
                        name: 'post4',
                        tags: 'java' ,
                        content: ' more fake content'
                    },
                    {   
                        id: 5,
                        name: 'post5',
                        tags: 'tech' ,
                        content: 'fake content'
                    },
                    {
                        id: 6,
                        name: 'post6',
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