import React from 'react'
import { shallow, mount } from "enzyme"
import { MemoryRouter } from 'react-router-dom'

import App from './App'

import * as api from '../coreAPI/themoviedbAPI'
const mySpy = jest.spyOn(api, 'searchMovie').mockImplementation(() => {
  return Promise.resolve({ results: ['a', 'b'] })
})

const mockProps = {
  history: {
    push: jest.fn()
  },
}

describe('@App', () => {
  describe('@render', () => {
    it('Default render', () => {
      const component = shallow(<App {...mockProps} />)
      expect(component).toMatchSnapshot()
    })
    it('should render home component', () => {
      const wrapper = mount(
        <MemoryRouter>
          <App {...mockProps} />
        </MemoryRouter>
      )
      expect(wrapper.find('.HomeContainer').length).toBe(1)
    })
  })
})
