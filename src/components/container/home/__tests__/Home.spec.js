import React from 'react'
import { shallow, mount } from 'enzyme'

import Home from '../Home'
import * as api from '../../../../coreAPI/themoviedbAPI'
const mySpy = jest.spyOn(api, 'searchMovie').mockImplementation(() => {
  return Promise.resolve({ results: [] })
})

const MockProps = {
  stringSearch: '',
  searchResult: [],
}

describe('@Home', () => {
  describe('render', () => {
    it('should render default home page', () => {
      const component = shallow(<Home {...MockProps} />)
      expect(component).toMatchSnapshot()
    })
  })
  describe('lifecycle', () => {
    it('should call searchMovie when the component is mounted', () => {
      mount(<Home {...MockProps} />)
      expect(mySpy).toHaveBeenCalled()
    })
  })
})
