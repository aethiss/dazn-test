import React from 'react'
import { shallow } from 'enzyme'

import Movies from '../Movies'

jest.mock('react-router-dom')

const props = {
  id: 1234,
  poster_path: 'path_image.png',
  name: 'title',
  original_title: 'original title',
  vote_average: 'vote_average'
}

describe('@Movies', () => {
  describe('render', () => {
    it('should render default Movie list detail', () => {
      const component = shallow(<Movies {...props} />)
      expect(component).toMatchSnapshot()
    })
    it('should link/redirect to the Movie full details link', () => {
      const component = shallow(<Movies {...props} />)
      expect(component.find('.link').props().to).toBe('/movie/1234')
    })
  })
})
