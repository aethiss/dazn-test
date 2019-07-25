import React from 'react'
import { shallow, mount } from "enzyme"

import App from './App'

import * as api from '../coreAPI/themoviedbAPI'
const mySpy = jest.spyOn(api, 'searchMovie').mockImplementation(() => {
  return Promise.resolve({ results: ['a', 'b'] })
})

const mockProps = {
  stringSearch: '',
  searchResult: []
}

describe('@App', () => {
  describe('@render', () => {
    it('Default render', () => {
      const component = shallow(<App {...mockProps} />)
      expect(component).toMatchSnapshot()
    })
    it('should render home component', () => {
      const wrapper = mount(
        <App {...mockProps} />
      )
      expect(wrapper.find('.HomeContainer').length).toBe(1)
    })
  })
})
