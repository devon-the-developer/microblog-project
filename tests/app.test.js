import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'MicroBlog Project'
  const wrapper = shallow(<App />)

  const actual = wrapper.find('h1')
  expect(actual.text()).toBe(expected)
})
