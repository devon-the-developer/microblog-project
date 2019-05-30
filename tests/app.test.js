import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

import { App } from '../client/components/App'

describe('<App />', () => {
  it('should contain 1 HashRouter element', () => {
    const props = {
      posts: []
    }
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: true})
    expect(wrapper.find('HashRouter').length).toBe(1)
  })
} )

// test('Microblog Project Title exists', () => {
//   const expected = 'MicroBlog Project'
//   const wrapper = shallow(<App />)

//   const actual = wrapper.find('h1')
//   expect(actual.text()).toBe(expected)
// })

// test('HashRouter is called', () => {
//   const expected = 1
//   const wrapper = shallow(<App />)
  
//   const actual = wrapper.find('HashRouter')
  
//   expect(actual.length).toBe(expected)
// })