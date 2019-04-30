import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('Microblog Project Title exists', () => {
  const expected = 'MicroBlog Project'
  const wrapper = shallow(<App />)

  const actual = wrapper.find('h1')
  expect(actual.text()).toBe(expected)
})

test('HashRouter is called', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  
  const actual = wrapper.find('HashRouter')
  
  expect(actual.length).toBe(expected)
})