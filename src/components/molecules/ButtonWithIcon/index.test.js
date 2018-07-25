import React from 'react'
import { mount, shallow } from 'enzyme'
import ButtonWithIcon from '.'

const wrap = (props = {}) => shallow(<ButtonWithIcon icon="github" {...props} />)

it('mounts with different combination of props', () => {
  mount(<ButtonWithIcon icon="github">test</ButtonWithIcon>)
  mount(
    <ButtonWithIcon icon="github" right>
      test
    </ButtonWithIcon>,
  )
  mount(
    <ButtonWithIcon icon="github" responsive>
      test
    </ButtonWithIcon>,
  )
  mount(
    <ButtonWithIcon icon="github" collapsed>
      test
    </ButtonWithIcon>,
  )
  mount(
    <ButtonWithIcon icon="github" right responsive>
      test
    </ButtonWithIcon>,
  )
  mount(<ButtonWithIcon icon="github" />)
  mount(<ButtonWithIcon icon="github" right />)
  mount(<ButtonWithIcon icon="github" responsive />)
  mount(<ButtonWithIcon icon="github" right responsive />)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})

it('passes height to icon', () => {
  const wrapper = wrap({ height: 20 })
  expect(wrapper.find({ height: 20 / 2.5 })).toHaveLength(1)
})
