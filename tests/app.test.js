import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { App } from '../client/components/App'

describe('<App />', () => {
  it('should contain 1 HashRouter element', () => {
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: true})
    expect(wrapper.find('HashRouter').length).toBe(1)
  })
  it('should contain the title: MicroBlog Project', () => {
    const expected = 'MicroBlog Project'
    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: true})

    const actual = wrapper.find('h1').text()

    expect(actual).toBe(expected)
  })
  it('should match snapshot', () => {
    const tree = shallow(<App />, {context: {}, disableLifecycleMethods: true})
    
    expect(toJson(tree)).toMatchSnapshot()
  })
} )
