import React from 'react'
import { shallow, mount } from 'enzyme'

import Movie from '../Movie'
import * as api from '../../../../coreAPI/themoviedbAPI'
const mySpy = jest.spyOn(api, 'searchMovie').mockImplementation(() => {
  return Promise.resolve({ results: [] })
})

const mockProps = {
  match: {
    params: {
      movieId: 12345
    }
  }
}

describe('@Home', () => {
  describe('render', () => {
    it('should render default home page', () => {
      const component = shallow(<Movie {...mockProps} />)
      expect(component).toMatchSnapshot()
    })
  })
  describe('lifecycle', () => {
    it('should call searchMovie when the component is mounted', () => {
      mount(<Movie {...mockProps} />)
      expect(mySpy).toHaveBeenCalledWith('http://api.themoviedb.org/3/movie/12345?api_key=f70db02dd395f7b2f0e354374b13d4ca')
    })
  })
})
