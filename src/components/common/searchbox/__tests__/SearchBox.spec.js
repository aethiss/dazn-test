import React from 'react'
import { shallow, mount } from "enzyme"

import SearchBox from '../SearchBox'

const mockProps = {
  updateSearch: jest.fn()
}

describe('@SearchBox', () => {
  describe('renders', () => {
    it('should render a input form', () => {
      const component = shallow(<SearchBox {...mockProps} />)
      expect(component).toMatchSnapshot()
      expect(component.find('input').props().type).toBe('search')
    })
  })
  describe('actions', () => {
    it('should call updateSearch after enter', () => {
      const component = mount(<SearchBox {...mockProps} />)
      const input = component.find('input')
      input.simulate('change', { target: { value: 'abcdefg'} })
      input.simulate('keydown', { keyCode: 13 })
      expect(component.props().updateSearch).toHaveBeenCalled()
    })
  })
})
