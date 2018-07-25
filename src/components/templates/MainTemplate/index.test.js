import React from 'react'
import { mount, shallow } from 'enzyme'
import PageTemplate from '.'

const wrap = (props = {}) => shallow(<PageTemplate {...props}>Hello There</PageTemplate>)

it('mounts', () => {
  mount(<PageTemplate>Hello There</PageTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('Hello There')).toBe(true)
})
