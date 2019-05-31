import React from 'react'
import { shallow } from 'enzyme'

import { DisplayPost } from '../client/components/DisplayPost'

describe('<DisplayPost />', () => {
    it('should contain 1 h2 tag', () => {
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
        const expected = 1
        const wrapper = shallow(<DisplayPost {...props} />, {context: {}, disableLifecycleMethods: true})
        
        const actual = wrapper.find('h2')
        
        expect(actual.length).toBe(expected)
    })
})