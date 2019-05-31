import React from 'react'
import { shallow } from 'enzyme'

import { EditPost } from '../client/components/EditPost'

describe('<EditPost />', () => {
    it('should have an h4 element containing: Edit Post', () => {
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
        const expected = 'Edit Post'
        const wrapper = shallow(<EditPost {...props} />)
        
        const actual = wrapper.find('h4').text()
        

        expect(actual).toBe(expected)
    })
})